
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        centered && "text-center",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-800 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-mushroom-700 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
