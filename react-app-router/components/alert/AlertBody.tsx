export default function AlertBody({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mt-4">
            {children}
        </div>
    );
}