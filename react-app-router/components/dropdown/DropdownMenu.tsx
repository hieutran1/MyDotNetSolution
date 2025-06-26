import { MenuItems } from "@headlessui/react";

export default function DropdownMenu({
    anchor = "bottom",
    children,
    className = "",
}: {
    anchor?: "top" | "bottom" | "left" | "right" | "bottom start" | "bottom end" | "top start" | "top end";
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <MenuItems
            as="div"
            className={`absolute ${anchor === "top" ? "bottom-full" : "top-full"} left-0 z-10 ${className}`}
            children={children}
            anchor={anchor}
        ></MenuItems>
    );
}