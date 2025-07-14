import Flag from 'react-flagpack';

export default function FlagC({
    children,
    className,
    code
}: {
    children?: React.ReactNode,
    className?: string,
    code?: string
}) {
    return (
        // <Flag code={code} className='w-5 sm:w-4' />
        <svg viewBox='0 0 16 12' className='w-5 sm:w-4' fill='none' width={16} height={12}>
            <use xlinkHref={`/flags/s/${code}.svg`}></use>
        </svg>
    );
}