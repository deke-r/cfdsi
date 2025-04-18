import React from 'react';

const testimonialData = [
  {
    name: 'Neeraj Gupta',
    rating: 5,
    feedback: 'I was impressed by the professionalism and expertise of the team at CFDSI. They quickly identified and resolved the underground cable fault, ensuring minimal disruption to our operations. Highly recommended for anyone needing reliable cable fault repair services.'
  },
  {
    name: 'Kanishk',
    rating: 5,
    feedback: 'I highly recommend CFDSI for their exceptional cable fault repair services. Their attention to detail, quick response times, and skilled technicians make them stand out in the industry. Trustworthy and professional every step of the way.'
  },
  {
    name: 'Rajesh Yadav',
    rating: 5,
    feedback: 'I had a critical LT cable fault that needed urgent attention. CFDSI responded promptly and resolved the issue with expertise. Their dedication to quality and customer satisfaction is commendable. I wouldn\'t hesitate to use their services again.'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials py-5">
      <div className="container">
        <h2 className="text-center text-white fw-bold mb-5">Testimonials</h2>
        <div className="row">
          {testimonialData.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
             <div className="card h-100 shadow testimonial-card">
  <div className="content"> {/* Add this wrapper */}
    <div className="card-body">
      <span className="quote-icon">❝</span>
      <p className="card-text mb-3 fw-semibold feedback">{testimonial.feedback}</p>
      <h5 className="card-title mb-1 fw-bold name">{testimonial.name}</h5>
      <p className="text-warning mb-0 rating">
        {'★'.repeat(testimonial.rating)}
        {'☆'.repeat(5 - testimonial.rating)}
      </p>
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
