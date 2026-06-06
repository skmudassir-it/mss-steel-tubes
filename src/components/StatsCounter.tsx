import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function StatsCounter({ value, label, className }: StatProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-3xl sm:text-4xl font-bold text-steel-dark tracking-tight">
        {value}
      </p>
      <p className="mt-1.5 text-sm text-muted-foreground font-medium">
        {label}
      </p>
    </div>
  );
}

interface StatsRowProps {
  children: React.ReactNode;
  className?: string;
}

export function StatsRow({ children, className }: StatsRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
}
