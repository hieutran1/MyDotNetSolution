export default function DescriptionTerm({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <dt
            className="text-sm font-medium text-gray-900 dark:text-gray-100"
            data-testid="description-term"
        >
            {children}
        </dt>
    );
}