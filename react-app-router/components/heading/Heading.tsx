export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {children}
        </h1>
    );
}