export default function SidebarSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5 px-3 pt-2.5 pb-3">
      {children}
    </div>
  );
}