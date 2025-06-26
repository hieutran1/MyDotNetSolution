export default function PaginationPrevious({
    href,
    children = 'Previous'
}: {
    href: string;
    children?: React.ReactNode;
}) {
    return (
        <span>
            <a
                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
                href={href}
            >
                {children}
            </a>
        </span>
    );
}