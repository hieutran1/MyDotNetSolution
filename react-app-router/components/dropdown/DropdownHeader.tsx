export default function DropdownHeader({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="col-span-5 px-3.5 pt-2.5 pb-1 sm:px-3">
            {children}
        </div>
    );
}