export default function Divider({
    soft = false // softer color
}: {
    soft?: boolean
}) {
    const className = soft ? 'border-zinc-950/50 dark:border-white/50' : 'border-zinc-950/10 dark:border-white/10';
    return (
        <hr className={className} />
    );
}