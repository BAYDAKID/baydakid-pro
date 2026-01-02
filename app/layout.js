
import "./globals.css";

export const metadata = {
  title: "BAYDAKID PRO",
  description: "AI-powered sports predictions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
          <h2 style={{ margin: 0 }}>BAYDAKID PRO</h2>
        </header>

        <main style={{ padding: "20px" }}>{children}</main>

        <footer
          style={{
            padding: "16px",
            borderTop: "1px solid #ddd",
            marginTop: "40px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} BAYDAKID PRO. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
