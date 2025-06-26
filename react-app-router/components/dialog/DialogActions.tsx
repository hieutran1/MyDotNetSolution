export default function DialogActions({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="flex flex-row-reverse gap-2 px-4 py-3 sm:px-6"
            data-testid="dialog-actions"
        >
            {children}
        </div>
    );
}