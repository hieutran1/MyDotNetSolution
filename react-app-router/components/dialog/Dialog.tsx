import * as Headless from "@headlessui/react";

export default function Dialog({
    open,
    onClose,
    size,
    children
}: {
    open: boolean;
    onClose: (open: boolean) => void;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    children: React.ReactNode;
}) {
    return (
        <Headless.Dialog
            open={open}
            onClose={() => onClose(false)}
            transition
        >
            <Headless.DialogBackdrop
                transition
                className={
                    "fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 px-2 py-2" +
                    " sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50" +
                    " transition duration-300 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
                }
                aria-hidden="true"
            ></Headless.DialogBackdrop>

            <div className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
                <div className="grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4">
                    <Headless.DialogPanel
                        transition
                        className={
                            "sm:max-w-lg row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-(--gutter) shadow-lg ring-1 ring-zinc-950/10 [--gutter:--spacing(8)] sm:mb-auto sm:rounded-2xl dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline" +
                            " transition duration-300 will-change-transform data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in" +
                            " sm:data-closed:translate-y-0 sm:data-closed:data-enter:scale-95"}>
                        {children}
                    </Headless.DialogPanel>
                </div>
            </div>
        </Headless.Dialog>
    );
}