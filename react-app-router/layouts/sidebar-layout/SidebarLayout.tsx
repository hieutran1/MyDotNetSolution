import { Heading, Subheading } from "@/components/heading";
import type { Navbar } from "@/components/navbar";
import type { Sidebar } from "@/components/sidebar";
import type React from "react";

export default function SidebarLayout({
    sidebar,
    navbar,
    children,
}: {
    sidebar: React.ReactElement<typeof Sidebar>;
    navbar: React.ReactElement<typeof Navbar>;
    children?: React.ReactNode;
}) {
    return (
        <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
            <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
                {sidebar}
            </div>
            <header className="flex items-center px-4 lg:hidden">
                <div className="py-2.5">
                    <span className="relative">
                        
                    </span>
                </div>
                {navbar}
            </header>
            <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
                <div
                    className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10"
                >
                    <div className="mx-auto max-w-6xl">
                        {/* <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
                            Order
                        </h1> */}
                        
                        <Heading>Order</Heading>
                        <hr
                            role="presentation"
                            className="mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"></hr>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}