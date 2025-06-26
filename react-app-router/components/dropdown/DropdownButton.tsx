import Button from "components/button/Button";

export default function DropdownButton({
    color = 'zinc',
    outline = false,
    plain = false,
    disabled = false,
    children,
    className = '',
    as,
    src
}: {
    color?: string;
    outline?: boolean;
    plain?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    src?: string;
}) {
    return (
        <Button
            color={color}
            outline={outline}
            plain={plain}
            disabled={disabled}
            children={children}
            >
            </Button>
    );
}