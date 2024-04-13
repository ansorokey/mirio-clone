import { Camera, Color, Layer, Point, Side, XYWH } from "@/types/canvas"
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

export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`
}


/*
  Originally had an issue with the code below where grabbing any corner/side would default to the bottom right corner.
  The cause was using && instead of &.
  & is the bitwise operator.
  This means it converts whatever it is comparing into binary numbers.
  Then, it compares the positions of 1's between the two.
  ANYWHERE where there is a 1, it is carried over into the result.
  So [00001111](15) & [11111111](255) = [11111111](255).
  The bitwise operator will typecast inputs into binary numebrs and return a binary number.

  && is the logical AND operartion.
  It checks for truthy and falsy values.
  A comparison made using && returns either the first falsey value OR the last truthy value.

  The reason we wanted to use the bitwise operator here is because we aren't just checking for truthy or falsy.
  We are specifically checking to see if the two values equate to the matching Side.[Side]
  (false && true) == 'Left' wasw what we were originally doing, where as
  ([0101] & [1101] == [1101])  is what we wanted

*/
export function resizeBounds(
  bounds: XYWH,
  corner: Side,
  point: Point
): XYWH {
  const result = {
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height
  };

  if((corner & Side.Left) === Side.Left) {
    result.x = Math.min(point.x, bounds.x + bounds.width);
    result.width = Math.abs(bounds.x + bounds.width - point.x);
  }

  if((corner & Side.Right) === Side.Right) {
    result.x = Math.min(point.x, bounds.x);
    result.width = Math.abs(point.x - bounds.x);
  }

  if((corner & Side.Top) === Side.Top) {
    result.y = Math.min(point.y, bounds.y + bounds.height);
    result.height = Math.abs(bounds.y + bounds.height - point.y);
  }

  if((corner & Side.Bottom) === Side.Bottom) {
    result.y = Math.min(point.y, bounds.y);
    result.height = Math.abs(point.y - bounds.y);
  }

  return result;
};

export function findIntersectingLayersWithRectangle(
  layerIds: readonly string[],
  layers: ReadonlyMap<string, Layer>,
  a: Point,
  b: Point
) {
  const rect = {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y)
  }

  const ids = [];

  for(const layerId of layerIds) {
    const layer = layers.get(layerId);

    if(layer == null) {
      continue;
    }

    const { x, y, height, width } = layer;

    if(
      rect.x + rect.width > x &&
      rect.x < x + width &&
      rect.y + rect.height > y &&
      rect.y < y + height
    ) {
      ids.push(layerId);
    }
  }

  return ids;
}
