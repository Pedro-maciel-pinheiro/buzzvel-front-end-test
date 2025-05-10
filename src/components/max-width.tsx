import React from "react";
import { cn } from "@/lib/utils";
import { MaxWidthProps } from "@/types";


export default function MaxWidth({ children, className }: MaxWidthProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl p-1 md:p-3 ", className)}>
        {children}
    </div>
  );
}
