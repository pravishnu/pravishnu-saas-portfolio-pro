export default function Dashboard() {
  return (
    <div
      className="glass"
      style={{
        padding: "30px",
        margin: "40px",
        borderRadius: "25px"
      }}
    >
      <h1 style={{ fontSize: "36px" }}>My Dashboard</h1>

      {/* TOP CARDS */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="glass card">💰 Total: ₹7,89,999</div>
        <div className="glass card">📈 Earnings: ₹9,89,999</div>
        <div className="glass card">💸 Expenses: ₹39,999</div>
      </div>

      {/* GRAPH AREA */}
      <div
        className="glass"
        style={{
          marginTop: "30px",
          padding: "20px",
          height: "200px"
        }}
      >
        📊 Graph coming here
      </div>

      {/* LOWER SECTION */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div className="glass card">🎯 Goals: 60%</div>
        <div className="glass card">📊 Business: 65%</div>
      </div>
    </div>
  );
}