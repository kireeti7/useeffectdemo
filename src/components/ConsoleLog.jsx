import { useState, useEffect } from "react";

export default function ConsoleLog() {
    const[text, settext] = useState("");

    useEffect(() => {
        console.log("this will run only once")
    }, [])

    return(
        <div>
            <h1>this will run once</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => settext(e.target.value)}
            />
        </div>

    );
}