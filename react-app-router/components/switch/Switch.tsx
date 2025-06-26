import * as Headless from '@headlessui/react'

export default function Switch({
    color = "zinc",
    disabled = false,
    name,
    value,
    defaultChecked,
    check,
    onChange,
    children
}: {
    color?: string;
    disabled?: boolean;
    name: string;
    value?: string;
    defaultChecked?: boolean;
    check?: boolean;
    onChange?: (checked: boolean) => void;
    children?: React.ReactNode;
}) {
    return (
        <Headless.Switch
            checked={check}
            disabled={disabled}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            onChange={onChange}
            className={`${
                check ? `bg-${color}-600` : `bg-${color}-200`
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
        >
            {children}
            </Headless.Switch>
    );
}