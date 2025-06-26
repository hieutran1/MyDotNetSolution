export default function DescriptionList({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <dl className="divide-y divide-gray-200 dark:divide-gray-700">
            {children}
        </dl>
    );
}