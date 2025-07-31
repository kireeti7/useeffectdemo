import { useState, useEffect } from "react";

export default function TimerCount() {
    const[count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);

        // return() => {
        //     clearTimeout(timeout);
        // };
    }, [count])

    return(
        <div>
            <h1>the count is {count} </h1>
        </div>

    );
}