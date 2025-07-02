export default function Navbar({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav
      className={"flex flex-1 items-center gap-4 py-2.5"}>
      {children}
    </nav>
  );
}