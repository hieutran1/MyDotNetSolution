export default function Subheading({ children }: { children: React.ReactNode }) {
    return (
        <h2 
            data-slot="subheading"
            className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {children}
        </h2>
    );
}