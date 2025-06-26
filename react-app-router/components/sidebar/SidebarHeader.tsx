export default function SidebarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5 px-3 pt-3 pb-2.5">
      {children}
    </div>
  );
}