000 0000 0000 0000 oh 000
import "./globals.css";

export const metadata = {
  title: "BAYDAKID PRO",
  description: "AI-powered sports predictions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
<header
  style={{
    padding: "16px 20px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  }}
>
    padding: "16px 20px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  }}
>
  <div style={{ fontWeight: "700", fontSize: "18px" }}>BAYDAKID PRO</div>

  <nav style={{ display: "flex", gap: "14px", fontSize: "14px" }}>
    <a href="/" style={{ textDecoration: "none" }}>Home</a>
    <a href="/picks" style={{ textDecoration: "none" }}>Picks</a>
    <a href="/about" style={{ textDecoration: "none" }}>About</a>
  </nav>

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
