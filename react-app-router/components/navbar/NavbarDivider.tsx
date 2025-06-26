export default function NavbarDivider({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`border-l border-gray-200 h-6 mx-2 ${className}`}
      role="separator"
    />
  );
}