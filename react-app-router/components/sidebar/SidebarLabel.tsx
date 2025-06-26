export default function SidebarLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {children}
        </span>
    );
}