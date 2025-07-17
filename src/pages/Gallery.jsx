const photos = [
  // Replace with actual images in /assets and correct imports.
  { src: "/src/assets/event1.jpg", alt: "Sports Day" },
  { src: "/src/assets/classroom.jpg", alt: "Classroom" },
  { src: "/src/assets/playground.jpg", alt: "Playground" },
];

export default function Gallery() {
  return (
    <section className="container mx-auto py-14 px-4">
      <h2 className="text-3xl font-bold mb-6 text-primary">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {photos.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={p.alt}
            className="rounded shadow hover:scale-105 transition duration-300 cursor-pointer"
          />
        ))}
      </div>
      {/* For videos: embed YouTube/Vimeo iframe */}
      <div className="max-w-xl mx-auto mb-6">
        <iframe
          src="https://www.youtube.com/embed/samplevideoid"
          className="w-full h-64"
          title="School Video"
          allowFullScreen
        />
      </div>
      {/* Filters, categories etc. can be added for large galleries */}
    </section>
  );
}
