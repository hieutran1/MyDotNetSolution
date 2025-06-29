export default function FieldGroup({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div data-slot="control" className="space-y-8">
            {children}
        </div>
    );
}