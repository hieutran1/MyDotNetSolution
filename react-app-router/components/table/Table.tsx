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
            {
                compact ?
                    (
                        <div className="flow-root">
                            <div className="-mx-(--gutter) overflow-x-auto whitespace-nowrap">
                                <div className={`inline-block min-w-full align-middle ${!bleed ? 'sm:px-(--gutter)' : ''}`}>
                                    <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
                                        {children}
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                            <div className={"-mt-4 w-full " + className}>
                                <div className="flow-root">
                                    <div className="-mx-(--gutter) overflow-x-auto whitespace-nowrap">
                                        <div className="inline-block min-w-full align-middle sm:px-(--gutter)">
                                            <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
                                                {children}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
}