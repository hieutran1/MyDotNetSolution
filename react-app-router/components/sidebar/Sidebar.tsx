import * as Headless from "@headlessui/react";

export default function Sidebar({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <nav
                className="flex h-full min-h-0 flex-col"
            >
                {children}
            </nav>
        </>
    );
}