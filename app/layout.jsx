import "./globals.css";

export const metadata = {
  title: "Turning to Trust Experience Design (TXD)",
  description:
    "A Manifesto for the Future of Distributed Autonomous Intelligence in the Wild — by Helena Rong and Botao Amber Hu.",
  openGraph: {
    title: "Turning to Trust Experience Design (TXD)",
    description:
      "A Manifesto for the Future of Distributed Autonomous Intelligence in the Wild.",
    type: "article",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
