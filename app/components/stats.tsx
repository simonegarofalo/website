import { stats } from "../data/stats";

export default function Stats() {
  return (
    <div className="w-full bg-[#F4F8FF] my-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 px-4 py-8 md:py-28 md:px-32 gap-8">
        {stats.map((s) => (
          <div key={s.value} className="flex flex-col items-center">
            <div className="text-[#2A6EF5] text-2xl md:text-3xl lg:text-5xl font-normal">{s.value}</div>
            <div className="stats-text text-center mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}