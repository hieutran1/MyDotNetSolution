import { Description as DescriptionH } from "@headlessui/react";

export default function Description({ children }: { children: React.ReactNode }) {
    return (
        <DescriptionH
            as="p"
            className="mt-1 text-sm text-gray-500"
            role="note">
            {children}
        </DescriptionH>
    );
}