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
      className="focus-ring touch-target relative group inline-flex items-center gap-2 rounded text-sm text-ink-secondary transition-colors hover:text-herbarium-deep"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden />
      <span>{label}</span>
    </Link>
  );
};
