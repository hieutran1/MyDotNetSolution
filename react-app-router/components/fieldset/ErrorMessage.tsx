import { Description } from "@headlessui/react";

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <Description
            as="p"
            className="text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500"
            data-slot="error"
            >
            {children}
        </Description>
    );
}