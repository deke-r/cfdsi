import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null); // For success/error message
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await axios.post('http://localhost:4000/contact-form-data', data);
      if (res.data.success) {
        setResponseMsg({ type: 'success', text: 'Message sent successfully!' });
        reset();
      } else {
        setResponseMsg({ type: 'error', text: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResponseMsg({ type: 'error', text: 'Server error. Please try later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer-section text-white pt-5 pb-4" style={{ backgroundColor: '#0d141f' }}>
      <div className="container">
        <div className="row">
          {/* Left Side Content */}
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold mb-3">Way To Contact Us.</h4>
            <p>
              Get in Touch for Swift Cable Fault Solutions! Our Expert Technicians are Ready to Resolve Your Cable Faults.
              Fast and Efficient Cable Fault Repair Services – Contact Us Now.
            </p>
            <p className="mb-1"><strong>We are open:</strong> Monday to Saturday / 09:00 - 18:00</p>
            <div className="mt-4">
              <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>UGF Pocket 2, Jasola Delhi - 110025</p>
              <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+91-9319154610</p>
              <p><i className="bi bi-envelope-fill me-2"></i>info@cfdsi.com</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6" style={{ borderLeft: '8px solid #233e63' }}>
            <h4 className="fw-bold mb-3">Contact Us</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Your Name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Your Email Address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Your Phone Number"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Enter a valid 10-digit phone number',
                      },
                    })}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    placeholder="Your City"
                    {...register('city', { required: 'City is required' })}
                  />
                  {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows="3"
                  placeholder="Type your message here..."
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
              </div>

              <div className="mb-3">
                <select
                  className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                  {...register('service', { required: 'Please select a service' })}
                >
                  <option value="">Select Service</option>
                  <option value="LT Cable Fault Finding">LT Cable Fault Finding</option>
                  <option value="OFC Cable Fault Finding">OFC Cable Fault Finding</option>
                  <option value="HT Cable Fault Finding">HT Cable Fault Finding</option>
                </select>
                {errors.service && <div className="invalid-feedback">{errors.service.message}</div>}
              </div>

              <button type="submit" className="btn bg_b text-light f_14 fw-semibold" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Response Message */}
            {responseMsg && (
              <div className={`mt-3 alert ${responseMsg.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {responseMsg.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
