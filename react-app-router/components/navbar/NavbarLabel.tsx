export default function NavbarLabel({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={`text-gray-700 font-semibold ${className}`}>
            {children}
        </span>
    );
}