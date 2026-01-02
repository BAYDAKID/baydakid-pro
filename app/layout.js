import "./globals.css";

export const metadata = {
  title: "BAYDAKID PRO",
  description: "AI-powered sports predictions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
