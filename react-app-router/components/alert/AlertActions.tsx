export default function AlertActions({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-end sm:space-x-2">
            {children}
        </div>
    );
}