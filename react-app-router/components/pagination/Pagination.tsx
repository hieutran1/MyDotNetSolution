export default function Pagination({
  className,
  aria_label = 'Page navigation',
  children
}: {
  className?: string;
  aria_label?: string;
  children: React.ReactNode;
}) {
  return (
    <nav
      className={`flex items-center justify-between ${className}`}
      aria-label={aria_label}
    >
      {children}
    </nav>
  );
}