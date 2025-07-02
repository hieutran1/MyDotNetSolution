export default function NavbarDivider({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={(className ? className + ' ' : '') + "h-6 w-px bg-zinc-950/10 dark:bg-white/10"} />
  );
}