export default function SidebarFooter({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}
) {
    return (
        <div
            className={className + "flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5"}
        >
            {children}
        </div>
    );
}