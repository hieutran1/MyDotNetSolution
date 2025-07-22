import * as Headless from '@headlessui/react'

export default function Switch({
    color = "zinc",
    name,
    value,
    defaultChecked,
    checked,
    onChange
}: {
    color?: string;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (value: boolean) => void;
}) {
    let className = 'group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8 transition duration-0 ease-in-out data-changing:duration-200 forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight] bg-zinc-200 ring-1 ring-black/5 ring-inset dark:bg-white/5 dark:ring-white/15 data-checked:bg-(--switch-bg) data-checked:ring-(--switch-bg-ring) dark:data-checked:bg-(--switch-bg) dark:data-checked:ring-(--switch-bg-ring) focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500 data-hover:ring-black/15 data-hover:data-checked:ring-(--switch-bg-ring) dark:data-hover:ring-white/25 dark:data-hover:data-checked:ring-(--switch-bg-ring) data-disabled:bg-zinc-200 data-disabled:opacity-50 data-disabled:data-checked:bg-zinc-200 data-disabled:data-checked:ring-black/5 dark:data-disabled:bg-white/15 dark:data-disabled:data-checked:bg-white/15 dark:data-disabled:data-checked:ring-white/15';

    switch (color) {
        case 'dark/zinc':
            className += ' [--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)]/25 [--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:var(--color-zinc-700)]/90';
            break;
        case 'dark/white':
            className += ' [--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)] [--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:transparent] dark:[--switch:var(--color-zinc-900)]';
            break;
        case 'dark':
            className += ' [--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:var(--color-white)]/15 [--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white]';
            break;
        case 'zinc':
            className += ' [--switch-bg-ring:var(--color-zinc-700)]/90 [--switch-bg:var(--color-zinc-600)] dark:[--switch-bg-ring:transparent] [--switch-shadow:var(--color-black)]/10 [--switch:white] [--switch-ring:var(--color-zinc-700)]/90';
            break;
        case 'white':
            className += ' [--switch-bg-ring:var(--color-black)]/15 [--switch-bg:white] dark:[--switch-bg-ring:transparent] [--switch-shadow:var(--color-black)]/10 [--switch-ring:transparent] [--switch:var(--color-zinc-950)]';
            break;
        case 'red':
            className += ' [--switch-bg-ring:var(--color-red-700)]/90 [--switch-bg:var(--color-red-600)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-red-700)]/90 [--switch-shadow:var(--color-red-900)]/20';
            break;
        case 'orange':
            className += ' [--switch-bg-ring:var(--color-orange-600)]/90 [--switch-bg:var(--color-orange-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-orange-600)]/90 [--switch-shadow:var(--color-orange-900)]/20';
            break;
        case 'amber':
            className += ' [--switch-bg-ring:var(--color-amber-500)]/80 [--switch-bg:var(--color-amber-400)] dark:[--switch-bg-ring:transparent] [--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-amber-950)]';
            break;

        case 'yellow':
            className += ' [--switch-bg-ring:var(--color-yellow-400)]/80 [--switch-bg:var(--color-yellow-300)] dark:[--switch-bg-ring:transparent] [--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-yellow-950)]'
            break;

        case 'lime':
            className += ' [--switch-bg-ring:var(--color-lime-400)]/80 [--switch-bg:var(--color-lime-300)] dark:[--switch-bg-ring:transparent] [--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-lime-950)]'
            break;

        case 'green':
            className += ' [--switch-bg-ring:var(--color-green-700)]/90 [--switch-bg:var(--color-green-600)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-green-700)]/90 [--switch-shadow:var(--color-green-900)]/20'
            break;

        case 'emerald':
            className += ' [--switch-bg-ring:var(--color-emerald-600)]/90 [--switch-bg:var(--color-emerald-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-emerald-600)]/90 [--switch-shadow:var(--color-emerald-900)]/20'
            break;

        case 'teal':
            className += ' [--switch-bg-ring:var(--color-teal-700)]/90 [--switch-bg:var(--color-teal-600)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-teal-700)]/90 [--switch-shadow:var(--color-teal-900)]/20'
            break;

        case 'cyan':
            className += ' [--switch-bg-ring:var(--color-cyan-400)]/80 [--switch-bg:var(--color-cyan-300)] dark:[--switch-bg-ring:transparent] [--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-cyan-950)]'
            break;

        case 'sky':
            className += ' [--switch-bg-ring:var(--color-sky-600)]/80 [--switch-bg:var(--color-sky-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-sky-600)]/80 [--switch-shadow:var(--color-sky-900)]/20';
            break;

        case 'blue':
            className += ' [--switch-bg-ring:var(--color-blue-700)]/90 [--switch-bg:var(--color-blue-600)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-blue-700)]/90 [--switch-shadow:var(--color-blue-900)]/20'
            break;

        case 'indigo':
            className += ' [--switch-bg-ring:var(--color-indigo-600)]/90 [--switch-bg:var(--color-indigo-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-indigo-600)]/90 [--switch-shadow:var(--color-indigo-900)]/20'
            break;

        case 'violet':
            className += ' [--switch-bg-ring:var(--color-violet-600)]/90 [--switch-bg:var(--color-violet-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-violet-600)]/90 [--switch-shadow:var(--color-violet-900)]/20'
            break;

        case 'purple':
            className += ' [--switch-bg-ring:var(--color-purple-600)]/90 [--switch-bg:var(--color-purple-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-purple-600)]/90 [--switch-shadow:var(--color-purple-900)]/20'
            break;

        case 'fuchsia':
            className += ' [--switch-bg-ring:var(--color-fuchsia-600)]/90 [--switch-bg:var(--color-fuchsia-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-fuchsia-600)]/90 [--switch-shadow:var(--color-fuchsia-900)]/20'
            break;

        case 'pink':
            className += ' [--switch-bg-ring:var(--color-pink-600)]/90 [--switch-bg:var(--color-pink-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-pink-600)]/90 [--switch-shadow:var(--color-pink-900)]/20'
            break;

        case 'rose':
            className += ' [--switch-bg-ring:var(--color-rose-600)]/90 [--switch-bg:var(--color-rose-500)] dark:[--switch-bg-ring:transparent] [--switch:white] [--switch-ring:var(--color-rose-600)]/90 [--switch-shadow:var(--color-rose-900)]/20'
            break;

        default:
            break;
    }

    return (
        <Headless.Switch
            checked={checked}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            onChange={onChange}
            className={className}
        >
            <span className='pointer-events-none relative inline-block size-4.5 rounded-full sm:size-3.5 translate-x-0 transition duration-200 ease-in-out border border-transparent bg-white shadow-sm ring-1 ring-black/5 group-data-checked:bg-(--switch) group-data-checked:shadow-(--switch-shadow) group-data-checked:ring-(--switch-ring) group-data-checked:translate-x-4 sm:group-data-checked:translate-x-3 group-data-checked:group-data-disabled:bg-white group-data-checked:group-data-disabled:shadow-sm group-data-checked:group-data-disabled:ring-black/5'></span>
        </Headless.Switch>
    );
}