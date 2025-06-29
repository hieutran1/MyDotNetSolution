export default function Legend({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            data-slot="legend"
            className="text-base/6 font-semibold text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white">
            {children}
        </div>
    );
}