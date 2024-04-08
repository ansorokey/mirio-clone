/*
 Custom types for the canvas component.

 The canvas toolbar has several different options for interacting with the page.
 How the canvas is interacted with will be determined by the CanvasState.
 The CanvasMode represents the different modes that can be slected.

 Different actions can share the same mode.
 Adding text or adding a shape are both Inserting mode actions.
 The LayerType further distinguishes between which action is active, and the properties needed.
*/

export type Color = {
    r: number;
    g: number;
    b: number;
};

export type Camera = {
    x: number;
    y: number;
}

export enum LayerType {
    Rectangle,
    Ellipse,
    Path,
    Text,
    Note
}

export type RectangleLayer = {
    type: LayerType.Rectangle;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
}

export type EllipseLayer = {
    type: LayerType.Ellipse;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
}

export type PathLayer = {
    type: LayerType.Path;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    points: number[][];
    value?: string;
}

export type TextLayer = {
    type: LayerType.Text;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
}

export type NoteLayer = {
    type: LayerType.Note;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
}

export type Point = {
    x: number;
    y: number;
}

export type XYWH = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export enum Side {
    Top = 1,
    Bottom = 2,
    Left = 4,
    Right = 8
}

export type CanvasState =
    | {
        mode: CanvasMode.None
    }
    | {
        mode: CanvasMode.Pressing,
        origin: Point;
    }
    | {
        mode: CanvasMode.SelectionNet,
        origin: Point;
        current?: Point;
    }
    | {
        mode: CanvasMode.Translating,
        current: Point;
    }
    | {
        mode: CanvasMode.Inserting,
        layerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Text | LayerType.Note;
    }
    | {
        mode: CanvasMode.Resizing,
        initialBounds: XYWH;
        corner: Side;
    }
    | {
        mode: CanvasMode.Pencil
    }

export enum CanvasMode {
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    Pencil
};

export type Layer = RectangleLayer | EllipseLayer | PathLayer | TextLayer | NoteLayer;
