import * as Headless from "@headlessui/react";
import { SOLID_COLOR_20 } from "test-data";

export default function Radio({
    color = 'zinc',
    // disabled = false,
    value
}: {
    color?: typeof SOLID_COLOR_20[number];
    // disabled?: boolean;
    value?: string | number;
    name?: string;
}) {
    let className = 'relative isolate flex size-4.75 shrink-0 rounded-full sm:size-4.25 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white before:shadow-sm group-data-checked:before:bg-(--radio-checked-bg) dark:before:hidden dark:bg-white/5 dark:group-data-checked:bg-(--radio-checked-bg) border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--radio-checked-border) dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_--theme(--color-white/15%)] dark:after:-inset-px dark:after:hidden dark:after:rounded-full dark:group-data-checked:after:block [--radio-indicator:transparent] group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] group-data-hover:[--radio-indicator:var(--color-zinc-900)]/10 dark:group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] dark:group-data-hover:[--radio-indicator:var(--color-zinc-700)] group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500 group-data-disabled:opacity-50 group-data-disabled:border-zinc-950/25 group-data-disabled:bg-zinc-950/5 group-data-disabled:[--radio-checked-indicator:var(--color-zinc-950)]/50 group-data-disabled:before:bg-transparent dark:group-data-disabled:border-white/20 dark:group-data-disabled:bg-white/2.5 dark:group-data-disabled:[--radio-checked-indicator:var(--color-white)]/50 dark:group-data-checked:group-data-disabled:after:hidden';
    
    switch (color) {
        case 'dark/zinc':
            className += ' [--radio-checked-bg:var(--color-zinc-900)] [--radio-checked-border:var(--color-zinc-950)]/90 [--radio-checked-indicator:var(--color-white)] dark:[--radio-checked-bg:var(--color-zinc-600)]';
            break;
        case 'dark/white':
            className += ' [--radio-checked-bg:var(--color-zinc-900)] [--radio-checked-border:var(--color-zinc-950)]/90 [--radio-checked-indicator:var(--color-white)] dark:[--radio-checked-bg:var(--color-white)] dark:[--radio-checked-border:var(--color-zinc-950)]/15 dark:[--radio-checked-indicator:var(--color-zinc-900)]';
            break;
        case 'dark':
            className += ' [--radio-checked-bg:var(--color-zinc-900)] [--radio-checked-border:var(--color-zinc-950)]/90 [--radio-checked-indicator:var(--color-white)]';
            break;
        case 'zinc':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-zinc-600)] [--radio-checked-border:var(--color-zinc-700)]/90';
            break;
        case 'white':
            className += ' [--radio-checked-bg:var(--color-white)] [--radio-checked-border:var(--color-zinc-950)]/15 [--radio-checked-indicator:var(--color-zinc-900)]';
            break;
        case 'red':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-red-600)] [--radio-checked-border:var(--color-red-700)]/90';
            break;
        case 'orange':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-orange-500)] [--radio-checked-border:var(--color-orange-600)]/90';
            break;
        case 'amber':
            className += ' [--radio-checked-bg:var(--color-amber-400)] [--radio-checked-border:var(--color-amber-500)]/80 [--radio-checked-indicator:var(--color-amber-950)]';
            break;

        case 'yellow':
            className += ' [--radio-checked-bg:var(--color-yellow-300)] [--radio-checked-border:var(--color-yellow-400)]/80 [--radio-checked-indicator:var(--color-yellow-950)]'
            break;

        case 'lime':
            className += ' [--radio-checked-bg:var(--color-lime-300)] [--radio-checked-border:var(--color-lime-400)]/80 [--radio-checked-indicator:var(--color-lime-950)]'
            break;

        case 'green':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-green-600)] [--radio-checked-border:var(--color-green-700)]/90'
            break;

        case 'emerald':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-emerald-600)] [--radio-checked-border:var(--color-emerald-700)]/90'
            break;

        case 'teal':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-teal-600)] [--radio-checked-border:var(--color-teal-700)]/90'
            break;

        case 'cyan':
            className += ' [--radio-checked-bg:var(--color-cyan-300)] [--radio-checked-border:var(--color-cyan-400)]/80 [--radio-checked-indicator:var(--color-cyan-950)]'
            break;

        case 'sky':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-sky-500)] [--radio-checked-border:var(--color-sky-600)]/80';
            break;

        case 'blue':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-blue-600)] [--radio-checked-border:var(--color-blue-700)]/90'
            break;

        case 'indigo':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-indigo-500)] [--radio-checked-border:var(--color-indigo-600)]/90'
            break;

        case 'violet':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-violet-500)] [--radio-checked-border:var(--color-violet-600)]/90'
            break;

        case 'purple':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-purple-500)] [--radio-checked-border:var(--color-purple-600)]/90'
            break;

        case 'fuchsia':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-fuchsia-500)] [--radio-checked-border:var(--color-fuchsia-600)]/90'
            break;

        case 'pink':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-pink-500)] [--radio-checked-border:var(--color-pink-600)]/90'
            break;

        case 'rose':
            className += ' [--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-rose-500)] [--radio-checked-border:var(--color-rose-600)]/90'
            break;

        default:
            break;
    }

    return (
        <Headless.Radio
            data-slot="control"
            value={value}
            className="group inline-flex focus:outline-hidden"
            // disabled={disabled}
        >
            <span
                className={className}>
                <span className="size-full rounded-full border-[4.5px] border-transparent bg-(--radio-indicator) bg-clip-padding forced-colors:border-[Canvas] forced-colors:group-data-checked:border-[Highlight]"></span>
            </span>
        </Headless.Radio>
    );
}