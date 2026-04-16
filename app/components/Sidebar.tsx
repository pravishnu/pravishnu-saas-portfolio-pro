"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="glass" style={{
      width: "250px",
      height: "95vh",
      margin: "15px",
      padding: "20px",
      borderRadius: "20px"
    }}>
      <h2 style={{ marginBottom: "30px" }}>🚀 SaaS Pro</h2>

      <nav style={{ lineHeight: "40px" }}>
        <p><Link href="/dashboard">📊 Dashboard</Link></p>
        <p><Link href="/chat">🤖 AI Chat</Link></p>
      </nav>
    </div>
  );
}