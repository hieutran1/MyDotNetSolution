export default function SidebarBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav
        className="flex-1 overflow-y-auto px-3 pt-2.5 pb-3"
        role="navigation"
        aria-label="Sidebar navigation"
    >
        {children}
    </nav>
  );
}