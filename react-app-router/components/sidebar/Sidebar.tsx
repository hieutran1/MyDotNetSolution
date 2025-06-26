export default function Sidebar({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <nav
            className="flex flex-col h-full w-64 bg-gray-800 text-white"
            role="navigation"
            aria-label="Sidebar navigation"
        >
            {children}
        </nav>
    );
}