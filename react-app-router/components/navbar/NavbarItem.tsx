import { Button } from "@headlessui/react";

export default function NavbarItem({
  current,
  href,
  children,
  className,
}: {
    current?: boolean;
    href?: string;
    children?: React.ReactNode;
    className?: string;
}) {
  return (
    <Button
        className={`text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
        role="navigation"
    >
        {children}
    </Button>
  );
}