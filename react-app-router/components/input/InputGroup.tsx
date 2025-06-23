export default function InputGroup({
    className,
    children
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div className={`${className}`}>
            <span className="relative isolate block">
                {children}
            </span>
        </div>
    );
}