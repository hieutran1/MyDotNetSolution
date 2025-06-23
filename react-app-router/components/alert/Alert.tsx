import { Dialog } from "@headlessui/react";

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
        // <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        //     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
        //         {children}
        //     </div>
        // </div>
        <Dialog open={open} onClose={onClose} className={`max-w-${size} w-full`}>
            {children}
        </Dialog>
    );
}