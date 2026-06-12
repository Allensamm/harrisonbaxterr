import "./globals.css";

export const metadata = {
  title: "Dr. R. Harrison Baxter | The Voice of Reflective Leadership",
  description:
    "Dr. R. Harrison Baxter — Business Consultant, Keynote Speaker, and Executive Coach based in New York. Leadership begins from within.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
