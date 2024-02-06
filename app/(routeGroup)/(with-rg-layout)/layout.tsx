export default function RouteGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <span>Inner Route Group Layout</span>
      {children}
    </div>
  );
}
