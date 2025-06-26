export default function DropdownHeader({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="px-4 py-2 text-sm text-gray-700 bg-gray-100">
            {children}
        </div>
    );
}