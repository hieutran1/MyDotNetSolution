import { Heading } from "./heading"

export default function DemoComponent(
    {
        heading,
        children
    }: {
        heading?: string,
        children: React.ReactNode
    }
) {
    return (
        <div className="max-w-2xl">
            {heading && <Heading>{heading}</Heading>}
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </div>
        </div>
    )
}