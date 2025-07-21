import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your template ID
      form.current,
      "YOUR_USER_ID" // Replace with your EmailJS user/public key
    );
    e.target.reset();
    alert("Message sent!");
  };
  return (
    <section className="container mx-auto py-14 px-4 max-w-2xl">
      <h2 className="text-3xl font-bold mb-6 text-primary">Contact Us</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white rounded shadow p-8 space-y-4"
      >
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            required
            name="user_name"
            className="w-full border rounded px-3 py-2 focus:border-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            required
            name="user_email"
            className="w-full border rounded px-3 py-2 focus:border-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="user_phone"
            className="w-full border rounded px-3 py-2 focus:border-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            rows="3"
            required
            name="message"
            className="w-full border rounded px-3 py-2 resize-none focus:border-primary outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded font-bold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
      <div className="my-6">
        <div className="font-semibold">Address:</div>
        <div>Gaushala Public School, Main Road, City</div>
        <div className="font-semibold mt-3">Email:</div>
        <div>contact@gpschool.edu</div>
        <div className="font-semibold mt-3">Phone:</div>
        <div>+91-90000-90000</div>
        <iframe
          src="https://www.google.com/maps/place/Gaushala+Public+School/@26.9169567,85.7799284,871m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39ec6f0015d8cbad:0xc726e4b8b602b273!8m2!3d26.9169519!4d85.7825033!16s%2Fg%2F11ld9y9jp9?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" // Update with school's map location
          className="w-full h-64 rounded mt-6"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>
    </section>
  );
}
