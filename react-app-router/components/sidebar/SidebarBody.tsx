export default function SidebarBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8"
    >
      {children}
    </div>

  );
}