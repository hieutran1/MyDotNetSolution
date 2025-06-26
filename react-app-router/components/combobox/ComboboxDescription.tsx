export default function ComboboxDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="block text-sm text-gray-500">
            {children}
        </span>
    );
}   