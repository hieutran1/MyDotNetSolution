export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1
            // className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white"
        >
            {children}
        </h1>
    );
}