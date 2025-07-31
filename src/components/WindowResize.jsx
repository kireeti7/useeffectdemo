import { useState, useEffect } from "react";

export default function Window() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize);

        return() => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return(
        <h1>current window width: {width}px</h1>
    );
}