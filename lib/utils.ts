import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Border colors for users in board page
const COLORS = [
  "#5356FF",
  "#907FA4",
  "#2C2D34",
  "#F5EFE7",
  "#EDEDD0",
  "#DFF5FF",
  "#EFD510",
  "#213555",
  "#B9D2D2",
  "#C75643",
  "#4A266A",
  "#6E60A0"
]

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length]
}
