export default function Strong({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <strong className="font-medium text-zinc-950 dark:text-white">
            {children}
        </strong>
    );
}