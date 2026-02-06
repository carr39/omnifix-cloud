export const metadata = {
  title: "Diagnóstico IA - Omnifix",
  description: "Plataforma de diagnóstico inteligente de equipos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        <header
          style={{
            padding: "1rem",
            background: "#111",
            color: "#fff",
          }}
        >
          Omnifix Cloud
        </header>

        {children}

        <footer
          style={{
            padding: "1rem",
            marginTop: "3rem",
            background: "#f1f1f1",
            fontSize: "0.9rem",
          }}
        >
          © Plataforma de Diagnóstico IA
        </footer>
      </body>
    </html>
  );
}
