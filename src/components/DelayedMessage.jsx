import { useState, useEffect } from "react";

export default function DelayedMessage() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (input) {
        setMessage(`You typed: ${input}`);
      } else {
        setMessage("");
      }
    }, 1000); // 2 seconds delay

    // Clear timeout if input changes before 2 seconds
    return () => clearTimeout(timeoutId);
  }, [input]); // Runs every time 'input' changes

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{message}</p>
    </div>
  );
}
