export default function Badge({
    color = 'zinc',
    children
}: {
    color?: string;
    children: React.ReactNode;
}) {
    let colorLime = ' bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15'
    let colorPurple = ' bg-purple-500/15 text-purple-700 group-data-hover:bg-purple-500/25 dark:text-purple-400 dark:group-data-hover:bg-purple-500/20';
    let colorRose = ' bg-rose-400/15 text-rose-700 group-data-hover:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-hover:bg-rose-400/20';

    return (
        <span
            className={
                'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline' +
                (color == 'lime' ? colorLime :
                    color == 'purple' ? colorPurple :
                        color == 'rose' ? colorRose : '')
            }
        >
            {children}
        </span>
    )
}