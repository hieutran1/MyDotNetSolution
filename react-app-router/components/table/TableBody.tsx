export default function TableBody({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {children}
        </tbody>
    );
}