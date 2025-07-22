import * as Headless from "@headlessui/react";

export default function Field({
    children,
    className = "",
    disabled,
}: {
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    invalid?: boolean;
}) {
    return (
        <Headless.Field
            className="[&>[data-slot=label]+[data-slot=control]]:mt-3 [&>[data-slot=label]+[data-slot=description]]:mt-1 [&>[data-slot=description]+[data-slot=control]]:mt-3 [&>[data-slot=control]+[data-slot=description]]:mt-3 [&>[data-slot=control]+[data-slot=error]]:mt-3 *:data-[slot=label]:font-medium"
            disabled = {disabled}
            >
            {children}
        </Headless.Field>
    );
}