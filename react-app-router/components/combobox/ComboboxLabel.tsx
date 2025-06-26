export default function ComboboxLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="block text-sm font-medium text-gray-700">
            {children}
        </span>
    );
}