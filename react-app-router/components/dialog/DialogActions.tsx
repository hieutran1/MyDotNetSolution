export default function DialogActions({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mt-8 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:flex-row sm:*:w-auto">
            {children}
        </div>
    );
}