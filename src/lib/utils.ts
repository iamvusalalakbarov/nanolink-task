import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatName = (fullName: string) => {
  const [firstName, lastName] = fullName.split(' ');
  return `${firstName} ${lastName.charAt(0)}.`;
};