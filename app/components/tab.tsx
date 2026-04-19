'use client'

type TabProps = {
  number: string;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function Tab({ number, title, description, isOpen, onToggle }: TabProps) {
  return (
    <div className="border-b border-gray-200 py-6 mt-10">
      <div
        className="flex items-center gap-6 cursor-pointer"
        onClick={onToggle}
      >
        <span className="text-2xl">{number}.</span>
        <span className={`text-2xl flex-1 transition-colors duration-300 ${isOpen ? "text-[#2A6EF5]" : "text-gray-800"}`}>
          {title}
        </span>
        <button className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 shrink-0 transition-transform duration-300">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="mt-6 ml-14 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}