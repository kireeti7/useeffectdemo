import { useState, useEffect } from "react";

export default function SampleData() {
    const [cityNames, setCityNames] = useState([]);

    useEffect(() => {
        fetch("/names.json")
            .then(Response => Response.json())
            .then(data => setCityNames(data));
    }, [])

    return <div>City Names: {cityNames.join(", ")}</div>;
}