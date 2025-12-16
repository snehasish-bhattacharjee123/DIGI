import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { urlFor } from "./imageurl"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(source: any) {
  if (!source) return ""
  try {
    return urlFor(source).url() || ""
  } catch {
    return ""
  }
}
