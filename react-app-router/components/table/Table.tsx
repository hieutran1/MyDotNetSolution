export default function Table({
    bleed = false,
    dense = false,
    grid = false,
    striped = false,
    compact = false,
    children,
    className = '',
}: {
    bleed?: boolean;
    dense?: boolean;
    grid?: boolean;
    striped?: boolean;
    compact?: boolean;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <>
            <div className="flow-root">
                <div className={
                    (className ? className + ' ' : '') +
                    "-mx-(--gutter) overflow-x-auto whitespace-nowrap"}>
                    <div className={`inline-block min-w-full align-middle ${!bleed ? 'sm:px-(--gutter)' : ''}`}>
                        <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
                            {children}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}