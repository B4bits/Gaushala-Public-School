import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg"; // Place an appropriate image at this path
import Testimonials from "../components/Testimonials"; // Create this component (simple slider)

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-100 via-green-50 to-yellow-100">
      <div className="container mx-auto py-16 flex flex-col items-center text-center px-3">
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-extrabold text-4xl md:text-5xl text-blue-700 mb-4"
        >
          Welcome to Gaushala Public School
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Nurturing Young Minds
        </p>
        <img
          src={heroImg}
          alt="Happy kids at school"
          className="rounded-lg shadow-lg mb-8 w-full max-w-2xl"
        />
        <div className="space-x-4">
          <a
            href="/admissions"
            className="bg-primary text-white rounded px-6 py-3 font-bold shadow-md hover:bg-blue-500 transition"
          >
            Apply Now
          </a>
          <a
            href="/about"
            className="bg-secondary text-blue-900 rounded px-6 py-3 font-bold hover:bg-yellow-400 transition"
          >
            Learn More
          </a>
        </div>
        {/* Example awards/certifications */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="bg-green-200 px-4 py-2 rounded">
            Awarded Best Primary School 2024
          </div>
          <div className="bg-yellow-200 px-4 py-2 rounded">
            ISO 9001:2015 Certified
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-12">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
