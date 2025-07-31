import { useState, useEffect } from "react";

export default function SocialMediaButton() {
    const [buttonType, setButtonType] = useState('posts');
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${buttonType}`)
            .then(response => response.json())
            .then(json => setItem(json))
    }, [buttonType])

    return (
        <>
            <div>
                <button onClick={() => setButtonType('posts')}>Posts</button>
                <button onClick={() => setButtonType('users')}>Users</button>
                <button onClick={() => setButtonType('comments')}>Comments</button>
            </div>
            <h1>{buttonType}</h1>
            {item.map((item) => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}