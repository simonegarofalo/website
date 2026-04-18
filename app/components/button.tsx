import Link from "next/link";

type ButtonProps = {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    href: string;  
};
  
  export default function Button({
    variant = "primary",
    children,
    href,
  }: ButtonProps) {
    const baseStyle = "inline-block items-center justify-center px-4 py-2 rounded-lg font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition";
  
    const variants = {
      primary: "bg-[#2A6EF5] text-white hover:bg-blue-600 focus-visible:ring-blue-500",
      secondary: "bg-white text-black",
    };
  
    return (
        <Link href={href} className={`${baseStyle} ${variants[variant]}`}>
        {children}
      </Link>
    );
  }