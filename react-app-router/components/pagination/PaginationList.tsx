export function PaginationList({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className="hidden items-baseline gap-x-2 sm:flex">
        {children}
    </span>
  );
}