import { useState, useEffect } from "react";

export default function IntervelCount() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timeIntervel = setInterval(() => {
            setTimer(prevTime => prevTime + 1)
        }, 1000);

        return () => {
            clearInterval(timeIntervel)
        };
    }, [])

    return (
        <h2>the timer is: {timer}</h2>
    );
}