export default function TableHead({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <thead className="text-zinc-500 dark:text-zinc-400">
            {children}
        </thead>
    );
}