"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      className="glass"
      style={{
        width: "80px",
        height: "80vh",
        margin: "40px 20px",
        padding: "20px",
        borderRadius: "30px",
        textAlign: "center"
      }}
    >
      <p><Link href="/dashboard">📊 My Dashboard </Link></p>
      <p><Link href="/chat">🤖 AI Chat</Link></p>
    </div>
  );
}