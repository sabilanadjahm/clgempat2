export default function StickyHeader({ title }) {
  return (
    <div className="sticky top-16 left-0 w-full bg-indigo-700 text-white py-3 text-xl font-semibold text-center shadow-md transition-all duration-300">
      📌 {title}
    </div>
  );
}
