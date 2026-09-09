import "./globals.css";

export const metadata = {
  title: "Ganpati Bappa Morya | 28 Years of Tradition",
  description: "A cinematic Ganesh Chaturthi invitation from the Jadhav family.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
