"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div>
      <h1>AI Chat</h1>

      <div className="glass" style={{
        padding: "25px",
        marginTop: "20px"
      }}>
        <input
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask AI..."
        />

        <button className="btn" onClick={sendMessage}>
          Send
        </button>

        <p style={{ marginTop: "20px" }}>{reply}</p>
      </div>
    </div>
  );
}