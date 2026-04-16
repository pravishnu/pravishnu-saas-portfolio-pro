import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{
        display: "flex",
        gap: "20px",
        padding: "20px"
      }}>
        <Sidebar />

        <div style={{
          flex: 1,
          padding: "30px",
          borderRadius: "20px"
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}