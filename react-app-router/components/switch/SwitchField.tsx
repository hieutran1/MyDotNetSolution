import { Field } from "@headlessui/react";

export default function SwitchField({
  children,
  disabled
}: {
    children?: React.ReactNode;
    disabled?: boolean
}) {
  return (
    <Field
        data-slot="field"
        disabled = {disabled}
        className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto] *:data-[slot=control]:col-start-2 *:data-[slot=control]:self-start sm:*:data-[slot=control]:mt-0.5 *:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 *:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2 has-data-[slot=description]:**:data-[slot=label]:font-medium"
    >
        {children}
    </Field>
  );
}