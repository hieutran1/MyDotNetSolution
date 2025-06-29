import { Label } from "@headlessui/react";

export default function DropdownLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Label
            as="div"
            className="col-start-2 row-start-1"
            data-slot="label"
        >
            {children}
        </Label>
    );
}