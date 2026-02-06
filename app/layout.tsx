export const metadata = {
  title: "Omnifix Cloud",
  description: "Diagnóstico y reparación remota en la nube"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
