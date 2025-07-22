import * as Headless from "@headlessui/react";
export default function Fieldset({
    disabled = false,
    children,
}: {
    disabled?: boolean;
    children: React.ReactNode;
}) {
    return (
        <Headless.Fieldset
            disabled={disabled}
            className="*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6">
            {children}
        </Headless.Fieldset>
    );
}