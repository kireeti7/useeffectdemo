import { useState, useEffect } from "react";

export default function ConsoleLog() {
    const[text, settext] = useState("");

    useEffect(() => {
        console.log("name is", text)
    }, [text])

    return(
        <div>
            <h1>Please Enter your Name: </h1>
            <input
                type="text"
                value={text}
                onChange={(e) => settext(e.target.value)}
            />
            <p>Your Name is: {" " + text}</p>
        </div>

    );
}