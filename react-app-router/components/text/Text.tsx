export default function Text({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <p
            data-slot="text"
            className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
            {children}
        </p>
    );
}