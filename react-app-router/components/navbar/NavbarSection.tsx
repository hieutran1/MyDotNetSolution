export default function NavbarSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={(className ? className + ' ' : '') + "flex items-center gap-3"}
    >
      {children}
    </div>
  );
}