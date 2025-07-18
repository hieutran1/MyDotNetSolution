import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function Alert({
    open,
    onClose,
    size = "md",
    children
}: {
    open: boolean;
    onClose: (isClose: boolean) => void;
    size?: string;
    children: React.ReactNode;
}) {
    return (
        <Dialog 
            open={open} 
            onClose={onClose} >
            <DialogBackdrop 
                className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
            />
            <div className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
                <div className="grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4">
                    <DialogPanel
                        className={`sm:max-w-${size} row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline transition duration-100 will-change-transform data-closed:opacity-0 data-enter:ease-out data-closed:data-enter:scale-95 data-leave:ease-in`}>
                            {children}
                        </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}