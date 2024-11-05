import React from 'react';
import img from  "../../assets/website/rev2.jpeg";

const Testimonials = () => {
  const testimonialsData = [
    {
      imageSrc: img,
      name: '',
      testimonial: '',
    },
    {
      imageSrc: 'https://example.com/image2.jpg',
      name: 'Aditya',
      testimonial: 'I love using this product.',
    },
    {
      imageSrc: 'https://example.com/image3.jpg',
      name: 'Umang',
      testimonial: 'This product has changed my life.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">What   
                     Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.imageSrc} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;