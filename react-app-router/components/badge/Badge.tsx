export default function Badge({
    color =  'zinc',
    children
}: {
    color?: string;
    children: React.ReactNode;
}) {
    return (
        <span>{children}</span>
    )
}