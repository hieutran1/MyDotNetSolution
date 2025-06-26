export function PaginationList({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex -space-x-px rounded-md shadow-sm ${className}`}>
        {children}
    </span>
  );
}