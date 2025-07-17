export default function Testimonials() {
  const testimonials = [
    {
      name: "Mr. Sharma",
      quote: "An amazing environment for kids! My child loves the school.",
    },
    {
      name: "Mrs. Patel",
      quote: "Teachers are caring and nurturing. Highly recommended.",
    },
  ];
  return (
    <div className="w-full max-w-xl mx-auto">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-lg p-5 mb-5 shadow border-l-4 border-primary"
        >
          <div className="italic">“{t.quote}”</div>
          <div className="mt-3 font-bold text-primary">{t.name}</div>
        </div>
      ))}
    </div>
  );
}
