export default function DialogBody({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={"mt-6 " + className}>
            {children}
        </div>
    );
}