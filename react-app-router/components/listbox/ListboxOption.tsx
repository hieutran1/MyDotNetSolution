import { ListboxOption as ListboxOptionH} from "@headlessui/react";

export default function ListboxOption({
    value,
    children
}: {
    value: string;
    children: React.ReactNode;
}) {
    return (
        <ListboxOptionH
            value={value}
            className="relative cursor-default select-none py-2 pl-10 pr-4"
            >
            {children}
            </ListboxOptionH>
    );
}