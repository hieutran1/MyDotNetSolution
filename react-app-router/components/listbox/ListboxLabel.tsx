export default function ListboxLabel({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0">
            {children}
        </span>
    );
}