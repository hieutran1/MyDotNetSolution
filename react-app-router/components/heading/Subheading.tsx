export default function Subheading({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <h2
            className={
                (className ? className + ' ' : '') +
                "text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white"}>
            {children}
        </h2>
    );
}