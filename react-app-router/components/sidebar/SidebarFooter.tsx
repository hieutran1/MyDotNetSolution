export default function SidebarFooter({
    children,
}: {
    children: React.ReactNode;
}
) {
    return (
        <div
            className="flex items-center justify-between px-3 pt-2.5 pb-3 text-sm text-gray-500 dark:text-gray-400"
            role="contentinfo"
        >
            {children}
        </div>
    );
}