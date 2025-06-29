export default function Fieldset({
    disabled = false,
    children,
}: {
    disabled?: boolean;
    children: React.ReactNode;
}) {
    return (
        <fieldset className="*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6">
            {children}
        </fieldset>
    );
}