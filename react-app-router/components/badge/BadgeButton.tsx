import { Button } from "@headlessui/react";

export default function BadgeButton({
    color = 'zinc',
    href,
    children
}: {
    color?: string;
    href?: string;
    children?: React.ReactNode;
}) {
    return (
        <Button>{children}</Button>
    )
}