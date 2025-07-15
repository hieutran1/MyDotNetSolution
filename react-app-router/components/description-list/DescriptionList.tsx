export default function DescriptionList({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <dl className="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6">
            {children}
        </dl>
    );
}