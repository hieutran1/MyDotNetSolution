export default function Subheading({ children }: { children: React.ReactNode }) {
    return (
        <h2 
            data-slot="subheading"
            className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            {children}
        </h2>
    );
}