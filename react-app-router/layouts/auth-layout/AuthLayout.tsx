export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main
            className="flex min-h-screen items-center justify-center bg-white px-4 py-12 dark:bg-zinc-950 forced-colors:bg-[Canvas] sm:px-6 lg:px-8"
            style={{ colorScheme: 'light dark' }}
        >
            <div className="w-full max-w-md space-y-8">
                {children}
            </div>
        </main>
    );
}