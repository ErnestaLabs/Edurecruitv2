"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <span
      className={cn(
        "relative inline-flex h-full w-full overflow-hidden rounded-full bg-transparent p-[1px]",
        className
      )}
    >
      <span
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from var(--angle), transparent 0deg, #C9A84C 90deg, transparent 180deg)`,
          animation: `spin ${duration}ms linear infinite`,
        }}
      />
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes spin {
          to { --angle: 360deg; }
        }
      `}</style>
      <span className={cn("relative z-10 inline-flex h-full w-full items-center justify-center rounded-full bg-transparent", borderClassName)}>
        {children}
      </span>
    </span>
  );
};
