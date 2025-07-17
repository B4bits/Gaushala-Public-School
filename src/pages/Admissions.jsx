export default function Admissions() {
  return (
    <section className="container mx-auto py-14 px-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-primary">Admissions</h2>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Admission Process</h3>
        <ol className="list-decimal ml-6 text-gray-700">
          <li>Fill out online/offline application form</li>
          <li>Submit required documents</li>
          <li>Interaction/assessment of child</li>
          <li>Final admission confirmation</li>
        </ol>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Eligibility</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Nursery: 3+ years as of March 31st</li>
          <li>KG: 4+ years; Class 1: 5+ years, etc.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Fee Structure</h3>
        <table className="table-auto w-full bg-white rounded shadow mb-4">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Annual Fee (INR)</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace with actual fee details */}
            <tr>
              <td className="border px-4 py-2">Nursery & KG</td>
              <td className="border px-4 py-2">15,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Class 1-5</td>
              <td className="border px-4 py-2">18,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <a
          href="/Admission-Form.pdf"
          download
          className="inline-block bg-green-400 text-white rounded px-6 py-3 font-bold hover:bg-green-600 transition"
        >
          Download Admission Form 📄
        </a>
      </div>
    </section>
  );
}
