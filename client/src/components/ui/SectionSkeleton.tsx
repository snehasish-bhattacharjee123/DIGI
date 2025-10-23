interface SectionSkeletonProps {
  height?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function SectionSkeleton({
  height = "md",
  className = "",
}: SectionSkeletonProps) {
  const heights = {
    xs: "h-48",
    sm: "h-64",
    md: "h-96",
    lg: "h-[600px]",
    xl: "h-[800px]",
  };

  return (
    <div
      className={`w-full ${heights[height]} bg-muted/30 animate-pulse rounded-lg ${className}`}
      role="status"
      aria-label="Loading content..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
