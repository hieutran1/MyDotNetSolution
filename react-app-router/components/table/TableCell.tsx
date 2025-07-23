import * as Headless from '@headlessui/react';
import { useHref } from 'internal/href.context';

export default function TableCell({
    children,
    className = '',
    bleed,
    tabIndex
}: {
    children?: React.ReactNode;
    className?: string;
    bleed?: boolean;
    tabIndex?: number;
}) {
    let href = useHref();

    return (
        <td
            className={
                (className ? className + ' ' : '') +
                "relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5" +
                (!bleed ? " py-4 sm:first:pl-1 sm:last:pr-1" : " py-2")
            }
        >
            {href &&
                <Headless.DataInteractive
                    as="a"
                    href={href}
                    className="absolute inset-0 focus:outline-hidden" data-row-link="true"
                    tabIndex={tabIndex ?? -1}
                ></Headless.DataInteractive>
            }
            {children}
        </td>
    );
}