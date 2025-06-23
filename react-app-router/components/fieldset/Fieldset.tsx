export default function Fieldset({
    disabled = false,
    children,
}: {
    disabled?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}