export default function DialogBody({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`flex-1 overflow-y-auto p-6 ${className}`}
            style={{ maxHeight: "calc(100vh - 200px)" }}
            data-testid="dialog-body"
        >
            {children}
        </div>
    );
}