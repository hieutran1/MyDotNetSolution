import * as Headless from "@headlessui/react";

export default function Dropdown({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        className ?
            <span className={className} >
                <Headless.Menu>
                    {children}
                </Headless.Menu>
            </span> :
            <Headless.Menu>
                {children}
            </Headless.Menu>
    );
}