export default function ListboxDescription({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="flex flex-1 overflow-hidden text-zinc-500 group-data-focus/option:text-white before:w-2 before:min-w-0 before:shrink dark:text-zinc-400">
            <span className="flex-1 truncate">
                {children}
            </span>
        </span>
    );
}