export default function Badge({
    color = 'zinc',
    children
}: {
    color?: string;
    children: React.ReactNode;
}) {
    return (
        <span
            className={
                'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline' + 
                (color == 'lime'?
                ' bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15':
                ' bg-zinc-600/10 text-zinc-700 group-data-hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-hover:bg-white/10')
            }
        >
            {children}
        </span>
    )
}