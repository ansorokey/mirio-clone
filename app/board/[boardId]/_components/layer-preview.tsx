"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import React from "react";
import { memo } from "react";
import { Rectangle } from "./layer-rectangle";
import { Ellipse } from "./layer-ellipse";
import { Text } from "./layer-text";
import { Note } from "./layer-note";

interface LayerPreviewProps {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor: string;
}

export const LayerPreview = memo(({
    id,
    onLayerPointerDown,
    selectionColor
}: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if(!layer) {
        return null;
    }

    switch (layer.type) {
        case LayerType.Rectangle:
            return (
                <Rectangle
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            );
        case LayerType.Ellipse:
            return (
                <Ellipse
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            );
        case LayerType.Text:
            return (
                <Text
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            );
        case LayerType.Note:
            return (
                <Note
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor}
                />
            );
        default:
            // console.log(layer)
            // console.warn("Unknown layer type");
    }
});

LayerPreview.displayName = "LayerPreview";
