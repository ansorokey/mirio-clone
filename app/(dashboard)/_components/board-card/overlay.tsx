export const Overlay = () => {
    return <div
    // Parent element has a group property
    // hovering over a child with a group-hover property applies that effect
    // basically just displaying the transparent div on hover
        className="opacity-0 group-hover:opacity-50 transition-opacity
        h-full w-full bg-black"
    />
}
