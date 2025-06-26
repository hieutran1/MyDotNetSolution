export default function ListboxDescription({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="block text-xs text-gray-500">
            {children}
        </span>
    );
}