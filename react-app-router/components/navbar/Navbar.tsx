export default function Navbar({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2 shadow-sm ${className}`}
      role="navigation">
        {children}
        </div>
  );
}