export default function AlertActions({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto">
            {children}
        </div>
    );
}