export default function NavbarSpacer({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex-1 ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
}