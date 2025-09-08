import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PhotoBoxProps {
  children: ReactNode;
  title?: string;
  label?: string;
  className?: string;
  variant?: "default" | "accent" | "large";
}

const PhotoBox = ({ children, title, label, className, variant = "default" }: PhotoBoxProps) => {
  const sizeClasses = {
    default: "w-80 h-48",
    accent: "w-72 h-44", 
    large: "w-96 h-64"
  };

  return (
    <div 
      className={cn(
        "relative group transition-all duration-500 ease-out",
        "hover:scale-105 hover:-translate-y-2",
        className
      )}
    >
      {/* Photo box container with lid effect */}
      <div 
        className={cn(
          "relative bg-card-gradient rounded-lg shadow-photo-box",
          "border border-border/50 overflow-hidden",
          "transition-all duration-500 ease-out",
          "hover:shadow-photo-box-hover",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
          "hover:before:opacity-100",
          sizeClasses[variant]
        )}
      >
        {/* Lid/Top section with label */}
        {(title || label) && (
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-secondary/80 to-primary/60 border-b border-accent/20">
            <div className="flex items-center justify-between h-full px-4">
              {/* Label tab effect */}
              <div className="flex items-center space-x-2">
                <div className="w-16 h-6 bg-accent/90 rounded-sm flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-semibold">
                    {label || "PHOTO"}
                  </span>
                </div>
              </div>
              
              {/* Title */}
              {title && (
                <h3 className="text-card-foreground text-sm font-medium truncate">
                  {title}
                </h3>
              )}
            </div>
          </div>
        )}

        {/* Content area */}
        <div className={cn(
          "p-6 h-full flex flex-col justify-center",
          (title || label) && "pt-16"
        )}>
          {children}
        </div>

        {/* Corner detail for authenticity */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-accent/40 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
      </div>

      {/* Metal clasp effect */}
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-8 bg-gradient-to-r from-accent/60 to-accent/80 rounded-r-sm border-r border-accent shadow-sm"></div>
    </div>
  );
};

export default PhotoBox;