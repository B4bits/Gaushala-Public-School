const curriculum = [
  {
    grade: "Nursery",
    details: "Play-based learning, letters, numbers, stories.",
  },
  { grade: "KG", details: "Language development, numbers, art, music." },
  { grade: "Class 1", details: "Math, English, EVS, activities." },
  {
    grade: "Class 2",
    details: "Curriculum expands: languages, math, social science.",
  },
  { grade: "Class 3", details: "Science, general knowledge, art, computers." },
  {
    grade: "Class 4",
    details: "Core subjects, group projects, extra reading.",
  },
  {
    grade: "Class 5",
    details: "Leadership, advanced projects, preparation for higher grades.",
  },
];

export default function Academics() {
  return (
    <section className="container mx-auto py-14 px-4">
      <h2 className="text-3xl font-bold mb-6 text-primary">Academics</h2>
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-3">
          Curriculum (Nursery–Class 5)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {curriculum.map((item) => (
            <div key={item.grade} className="bg-white p-4 rounded shadow">
              <div className="font-bold text-lg text-green-700">
                {item.grade}
              </div>
              <div className="text-gray-700">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold text-xl mb-3">Teaching Methodologies</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Play-way & experiential learning</li>
          <li>Project-based and group activities</li>
          <li>Technology-assisted lessons</li>
          <li>Inclusive and value-based education</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-3">
          Extracurricular Activities
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-yellow-100 px-4 py-2 rounded">Music & Dance</div>
          <div className="bg-green-100 px-4 py-2 rounded">Art & Craft</div>
          <div className="bg-blue-100 px-4 py-2 rounded">Sports & Yoga</div>
          <div className="bg-yellow-200 px-4 py-2 rounded">Storytelling</div>
        </div>
      </div>
    </section>
  );
}
