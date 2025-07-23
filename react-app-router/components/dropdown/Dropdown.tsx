import * as Headless from "@headlessui/react";

export default function Dropdown({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Headless.Menu>
            {children}
        </Headless.Menu>
    );
}