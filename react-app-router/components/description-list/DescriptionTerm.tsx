export default function DescriptionTerm({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <dt
            className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5"
        >
            {children}
        </dt>
    );
}