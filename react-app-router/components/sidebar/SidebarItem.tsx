import { Button } from "@headlessui/react";

export default function SidebarItem({
  current,
  href,
  children
}: {
  current?: boolean;
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      as="a"
      href={href}
      className={`flex items-center gap-2.5 px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${current
          ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
          : "text-gray-700 dark:text-gray-300"
        }`}
      role="menuitem">
      {children}
    </Button>
  );
}