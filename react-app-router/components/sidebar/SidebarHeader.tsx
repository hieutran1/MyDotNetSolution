export default function SidebarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5">
      {children}
    </div>
  );
}