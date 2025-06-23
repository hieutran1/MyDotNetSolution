import { Field as FieldH } from "@headlessui/react";

export default function Field({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FieldH
            as="div"
            className="mb-4"
            role="group">
            {children}
        </FieldH>
    );
}