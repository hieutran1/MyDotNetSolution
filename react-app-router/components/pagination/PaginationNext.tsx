import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { Button } from "../button";

export function PaginationNext({
    href,
    children = 'Next'
}: {
    href?: string;
    children?: React.ReactNode;
}) {
    return (
        <span className="flex grow basis-0 justify-end">
            <Button plain aria_label="Next page"
                disabled={href ? false : true}
            >
                {children}
                <ArrowLongRightIcon />
            </Button>
        </span>
    );
}
