export default function Bab({ id, title, content }) {
  return (
    <section id={id} className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl transition-all hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </section>
  );
}
