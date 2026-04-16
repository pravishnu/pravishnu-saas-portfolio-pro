"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="glass" style={{
      width: "230px",
      height: "100vh",
      padding: "20px"
    }}>
      <h2>🚀 SaaS Pro</h2>

      <nav style={{ marginTop: "20px" }}>
        <p><Link href="/dashboard">📊 Dashboard</Link></p>
        <p><Link href="/chat">🤖 AI Chat</Link></p>
      </nav>
    </div>
  );
}