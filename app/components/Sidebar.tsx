"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#020617",
      padding: "20px"
    }}>
      <h2>🚀 SaaS</h2>

      <nav>
        <p><Link href="/dashboard">Dashboard</Link></p>
        <p><Link href="/chat">AI Chat</Link></p>
      </nav>
    </div>
  );
}