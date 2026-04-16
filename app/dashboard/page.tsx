export default function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>
        Dashboard
      </h1>

      <div style={{
        display: "flex",
        gap: "25px"
      }}>
        <div className="glass card">
          👤 Users: 120
        </div>

        <div className="glass card">
          💰 Revenue: ₹10,000
        </div>

        <div className="glass card">
          🤖 AI Requests: 500
        </div>
      </div>
    </div>
  );
}