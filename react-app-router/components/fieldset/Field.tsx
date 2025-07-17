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
            className="[&>[data-slot=label]+[data-slot=control]]:mt-3 [&>[data-slot=label]+[data-slot=description]]:mt-1 [&>[data-slot=description]+[data-slot=control]]:mt-3 [&>[data-slot=control]+[data-slot=description]]:mt-3 [&>[data-slot=control]+[data-slot=error]]:mt-3 *:data-[slot=label]:font-medium"
            disabled={disabled}
            aria-disabled={disabled}
            >
            {children}
        </Headless.Field>
    );
}