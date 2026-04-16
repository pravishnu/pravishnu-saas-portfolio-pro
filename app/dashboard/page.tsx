export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={card}>Users: 120</div>
        <div style={card}>Revenue: ₹10,000</div>
        <div style={card}>AI Requests: 500</div>
      </div>
    </div>
  );
}

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px"
};