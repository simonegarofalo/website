type SectionHeaderProps = {
    label: string;
    title: string;
    description: string;  
};
export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
    return (
      <div className="lg:max-w-[50%] px-8 md:px-20 mt-20">
        <span>{label}</span>
        <h2 className="font-normal text-2xl md:text-3xl mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }