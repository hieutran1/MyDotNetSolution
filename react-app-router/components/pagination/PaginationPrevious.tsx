import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";
import { Button } from "../button";

export default function PaginationPrevious({
    href,
    children = 'Previous'
}: {
    href?: string;
    children?: React.ReactNode;
}) {
    return (
        <span className="grow basis-0">
            <Button plain
                aria_label="Previous page"
                disabled={href ? false : true}
            >
                <ArrowLongLeftIcon />
                {children}
            </Button>
        </span>
    );
}