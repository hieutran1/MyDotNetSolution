import { Heading } from "@/components/heading";
import { NavbarItem, type Navbar } from "@/components/navbar";
import type { Sidebar } from "@/components/sidebar";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import * as Headless from "@headlessui/react";

export default function StackedLayout({
    navbar,
    sidebar,
    children,
}: {
    navbar: React.ReactElement<typeof Navbar>;
    sidebar?: React.ReactElement<typeof Sidebar>;
    children?: React.ReactNode;
}) {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative isolate flex min-h-svh w-full flex-col bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
            <header className="flex items-center px-4">
                <div className="py-2.5 lg:hidden">
                    <NavbarItem
                        className="cursor-default"
                        aria-label="Open navigation"
                        onClick={() => setIsOpen(!isOpen)}>
                        <Bars2Icon></Bars2Icon>
                    </NavbarItem>

                    <Headless.Dialog
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        className="lg:hidden"
                    >
                        <Headless.DialogBackdrop
                            transition
                            className={
                                "fixed inset-0 bg-black/30" +
                                " data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                            }
                        ></Headless.DialogBackdrop>

                        <Headless.DialogPanel
                            transition
                            className={
                                "fixed inset-y-0 w-full max-w-80 p-2" +
                                " duration-600 ease-in-out data-closed:-translate-x-full"
                            }
                        >
                            <div
                                className="flex h-full flex-col rounded-lg bg-white shadow-xs ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10"
                            >
                                <div className="-mb-3 px-4 pt-3">
                                    <span className="relative">
                                        <Headless.Button
                                            className="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                                            aria-label="Close navigation"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"></span>
                                            <XMarkIcon></XMarkIcon>
                                        </Headless.Button>
                                    </span>
                                </div>
                                {sidebar}
                            </div>
                        </Headless.DialogPanel>
                    </Headless.Dialog>
                </div>
                <div className="min-w-0 flex-1">
                    {navbar}
                </div>
            </header>
            <main className="flex flex-1 flex-col pb-2 lg:px-2">
                <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
                    <div className="mx-auto max-w-6xl">
                        <Heading>Home</Heading>
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