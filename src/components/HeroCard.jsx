import { MdAssessment } from "react-icons/md";

export default function Card({ title, desc }) {
  return (
    <div className="text-center bg-indigo-600 text-white w-64 md:w-80 rounded-md border flex flex-col items-center">
      <MdAssessment className="relative w-16 h-16 rounded bottom-10 bg-indigo-600 z-0" />
      <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
      <p className="mx-8 mb-6">{desc}</p>
    </div>
  );
}
