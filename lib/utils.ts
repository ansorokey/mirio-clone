import { Camera } from "@/types/canvas"
import { type ClassValue, clsx } from "clsx"
import React from "react"
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

// Returns a color from the above array based ona user's connectionId for a board/live room
export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length]
}

// Calculates the coordinates for the camera
export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY)- camera.y,
  }
}
