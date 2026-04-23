type ServiceCardProps = {
    icon: React.ReactNode;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    tag: string;
  };
  
  export default function ServiceCard({ icon, iconBg, iconColor, title, description, tag }: ServiceCardProps) {
    return (
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600 flex-1">{description}</p>
        <div>
          <span className="px-4 py-2 rounded-full bg-blue-50 text-[#2A6EF5] text-sm">
            {tag}
          </span>
        </div>
      </div>
    );
  }