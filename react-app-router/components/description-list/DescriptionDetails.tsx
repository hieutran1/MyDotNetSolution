export default function DescriptionDetails({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <dd
            className="mt-1 text-sm text-gray-900 dark:text-gray-100"
            data-testid="description-details"
        >
            {children}
        </dd>
    );
}