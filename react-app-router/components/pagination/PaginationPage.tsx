export default function PaginationPage({
    href,
    children,
    current = false
}: {
    href: string;
    children: React.ReactNode;
    current?: boolean;
}) {
    return (
        <a
            className={`flex items-center justify-center px-3 py-2 text-sm font-medium ${
                current
                    ? 'text-blue-600 bg-blue-50 border-blue-500'
                    : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
            } border rounded-md`}
            href={href}
        >
            {children}
        </a>
    );
}