export default function SidebarSection({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="section"
      className={(className ? className + ' ' : '') + "flex flex-col gap-0.5"}
    >
      {children}
    </div>
  );
}