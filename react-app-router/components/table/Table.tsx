export default function Table({
    bleed = false,
    dense = false,
    grid = false,
    striped = false,
    compact = false,
    children,
    className = '',
}: {
    bleed?: boolean;
    dense?: boolean;
    grid?: boolean;
    striped?: boolean;
    compact?: boolean;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <table
            className={`w-full text-left text-sm ${bleed ? 'table-bleed' : ''} ${dense ? 'table-dense' : ''
                } ${grid ? 'table-grid' : ''} ${striped ? 'table-striped' : ''} ${compact ? 'table-compact' : ''} ${className}`}
            style={{ borderCollapse: 'separate', borderSpacing: '0' }}
        >
            {children}
        </table>
    );
}