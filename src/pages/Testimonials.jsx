import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://via.placeholder.com/80",
      name: "John Doe",
      review: "The trip was absolutely amazing! Highly recommended!",
    },
    {
      image: "https://via.placeholder.com/80",
      name: "Jane Smith",
      review: "A life-changing experience. Will definitely book again.",
    },
    {
      image: "https://via.placeholder.com/80",
      name: "Mike Johnson",
      review: "Affordable and well-organized. Kudos to the team!",
    },
  ];

  return (
    <section className="my-6">
      <h2 className="text-center text-2xl font-bold text-teal-700">Testimonials</h2>
      <div className="flex justify-center flex-wrap mt-4">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-box w-64 mx-4">
            <img src={t.image} alt={t.name} className="testimonial-image" />
            <p className="mt-2">{t.review}</p>
            <h3 className="mt-2 font-bold">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
