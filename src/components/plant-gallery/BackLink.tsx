import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
  label: string;
}

export const BackLink: React.FC<BackLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-[#EFE8D8]/70 hover:text-[#9FE870] transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span>{label}</span>
    </Link>
  );
};
