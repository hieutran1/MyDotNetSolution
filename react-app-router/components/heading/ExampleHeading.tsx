import Button from "components/button/Button";
import { Heading, Subheading } from "@/components/heading";
import Divider from "../divider/Divider";

export default function ExampleHeading() {
    return (
        <div className="max-w-2xl">
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                    <Heading>Order #1011</Heading>
                    <div className="flex gap-4">
                        <Button outline>Refund</Button>
                        <Button>Resend invoice</Button>
                    </div>
                </div>
            </div>

            <Divider />
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                    <Subheading>Order details</Subheading>
                </div>
            </div>

        </div>
    );
}