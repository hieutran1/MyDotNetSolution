import { Dialog as DialogH } from "@headlessui/react";

export default function Dialog({
    open,
    onClose,
    size,
    children
}: {
    open: boolean;
    onClose: (open: boolean) => void;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'| '3xl';
    children: React.ReactNode;
}) {
    const className = size === 'sm' ? 'max-w-sm' : size === 'lg' ? 'max-w-lg' : 'max-w-md';

    return (
        <DialogH
            open={open}
            onClose={() => onClose(false)}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${className}`}
        >
            {/* <Dialog.Overlay className="fixed inset-0 bg-black/30" /> */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
                {children}
            </div>
        </DialogH>
    );
}