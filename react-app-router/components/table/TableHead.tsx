export default function TableHead({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <thead className="bg-zinc-100 dark:bg-zinc-800">
            {children}
        </thead>
    );
}