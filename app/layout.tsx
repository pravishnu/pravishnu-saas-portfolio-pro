import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "30px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}