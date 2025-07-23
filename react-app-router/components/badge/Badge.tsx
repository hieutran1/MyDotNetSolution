export default function Badge({
    color = 'dark/zinc',
    children,
    className
}: {
    color?: string;
    children: React.ReactNode;
    className?: string;
}) {
    let innerClassName = 'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline';
    switch (color) {
        case 'dark/zinc':
            innerClassName += ' bg-zinc-600/10 text-zinc-700 group-data-hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-hover:bg-white/10';
            break;
        case 'lime':
            innerClassName += ' bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15';
            break;
        case 'purple':
            innerClassName += ' bg-purple-500/15 text-purple-700 group-data-hover:bg-purple-500/25 dark:text-purple-400 dark:group-data-hover:bg-purple-500/20';
            break;
        case 'rose':
            innerClassName += ' bg-rose-400/15 text-rose-700 group-data-hover:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-hover:bg-rose-400/20';
            break;
        default:
            innerClassName += ' bg-zinc-600/10 text-zinc-700 group-data-hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-hover:bg-white/10';
            break;
    }

    return (
        <span className={
            (className ? className + ' ' : '') +
            innerClassName}>{children}</span>
    )
}