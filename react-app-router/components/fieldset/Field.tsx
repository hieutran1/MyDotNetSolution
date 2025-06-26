import * as Headless from "@headlessui/react";

export default function Field({
    disabled = false,
    children,
    className = "",
}: {
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Headless.Field
            as="div"
            className={"mb-4" + (className ? ` ${className}` : "")}
            role="group"
            disabled={disabled}>
            {children}
        </Headless.Field>
    );
}