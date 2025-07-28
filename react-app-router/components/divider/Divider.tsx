export default function Divider({
    soft = false, // softer color
    className,
    role
}: {
    soft?: boolean,
    className?: string,
    role?: string
}) {
    const innerClassName = soft ? 'border-zinc-950/5 dark:border-white/5' : 'border-zinc-950/10 dark:border-white/10';

    return (
        <hr role={role} className={(className ? className + ' ' : '') + innerClassName} />
    );
}