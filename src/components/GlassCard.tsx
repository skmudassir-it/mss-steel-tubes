import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "p-4 sm:p-5",
  md: "p-5 sm:p-7",
  lg: "p-6 sm:p-8",
};

export function GlassCard({
  children,
  className,
  hover = false,
  padding = "md",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl shadow-card transition-all duration-300",
        paddingMap[padding],
        hover && "hover:shadow-elevated hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
