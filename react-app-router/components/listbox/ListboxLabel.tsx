export default function ListboxLabel({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="block truncate text-sm text-gray-900">
            {children}
        </span>
    );
}