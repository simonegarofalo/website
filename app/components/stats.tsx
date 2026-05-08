import { stats } from "../data/stats";

export default function Stats() {
  return (
    <div className="w-full bg-[#F4F8FF] mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 px-4 py-8 md:py-24 md:px-32 gap-8">
        {stats.map((s) => (
          <div key={s.value} className="flex flex-col items-center">
            <div className="text-[#2A6EF5] text-3xl md:text-4xl lg:text-6xl">{s.value}</div>
            <div className="stats-text text-center mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}