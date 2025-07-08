export default function Pagination({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <nav
      className={`${className} flex gap-x-2`}
      aria-label="Page navigation"
    >
      {children}
    </nav>
  );
}