import { Description } from "@headlessui/react";

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <Description
            as="p"
            className="mt-1 text-sm text-red-600"
            role="alert">
            {children}
        </Description>
    );
}