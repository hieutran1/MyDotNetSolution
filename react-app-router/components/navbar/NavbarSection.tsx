export default function NavbarSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center space-x-4 ${className}`}
      role="navigation">
      {children}
    </div>
  );
}