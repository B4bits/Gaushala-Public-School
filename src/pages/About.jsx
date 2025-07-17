export default function About() {
  return (
    <section className="container mx-auto py-14 px-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-primary">About Us</h2>
      <div className="bg-white shadow rounded-lg p-6 mb-10">
        <h3 className="font-semibold text-lg mb-2">Vision</h3>
        <p>
          To nurture young minds for lifelong learning, responsibility, and joy.
        </p>
        <h3 className="font-semibold text-lg mt-4 mb-2">Mission</h3>
        <p>
          Our mission is to inspire and empower children to achieve their
          highest potential in a loving, secure, and inclusive environment.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Our History</h3>
        <div className="relative pl-8 border-l-4 border-green-300">
          <div className="mb-4">
            <span className="font-semibold text-green-600">2010</span>: School
            founded with Nursery & KG classes.
          </div>
          <div className="mb-4">
            <span className="font-semibold text-green-600">2015</span>: Expanded
            to Class 5 with new facilities.
          </div>
          <div className="mb-4">
            <span className="font-semibold text-green-600">2022</span>: Awarded
            for excellence in primary education.
          </div>
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Principal’s Message</h3>
        <p>
          “Every child is a unique flower, and together they make this world a
          beautiful garden. Welcome to Gaushala Public School—where dreams are
          nourished and every child’s success story begins.”
        </p>
        <div className="text-right mt-4 italic font-signature">
          - Principal, GPS
        </div>
      </div>
    </section>
  );
}
