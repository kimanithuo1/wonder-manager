import React from 'react';

function Contact() {
  return (
    <div className="container bg-[#F3E8CA] text-[#322505] py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.</p>
      <form>
        <input type="text" placeholder="Your Name" required className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" required className="border p-2 rounded" />
        <input type="text" placeholder="Subject" required className="border p-2 rounded" />
        <textarea rows="4" placeholder="Your Message" required className="border p-2 rounded"></textarea>
        <button type="submit" className="bg-[#FA802F] text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
