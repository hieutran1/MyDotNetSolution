export default function SidebarHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400">
      {children}
    </h3>
  );
}