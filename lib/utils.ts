import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ClassValue } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
