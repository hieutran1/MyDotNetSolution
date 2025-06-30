export default function SidebarLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="truncate">
            {children}
        </span>
    );
}