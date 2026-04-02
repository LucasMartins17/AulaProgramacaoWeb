export default function NeoCard({ children, title }) {
  return (
    <div className="bg-white border-4 border-black shadow-neo p-6 m-4 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-hover">
      {title && <h2 className="text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">{title}</h2>}
      {children}
    </div>
  );
}