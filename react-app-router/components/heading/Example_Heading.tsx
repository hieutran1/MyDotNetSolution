import Button from "components/button/Button";
import Heading from "./Heading";
import Subheading from "./Subheading";

export default function Example_Heading() {
    return (
        <>
            <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
                <Heading>Order #1011</Heading>
                <div className="flex gap-4">
                    <Button outline>Refund</Button>
                    <Button>Resend invoice</Button>
                </div>
            </div>
            <div className="mt-6">
                <Subheading>Order details</Subheading>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    This order was placed on <time dateTime="2023-10-01">October 1, 2023</time> and is currently
                    <span className="font-semibold text-zinc-900 dark:text-white"> being processed</span>.
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    The customer has chosen to pay with <span className="font-semibold text-zinc-900 dark:text-white">credit card</span>.
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    The order will be shipped to <span className="font-semibold text-zinc-900 dark:text-white">123 Main St, Springfield, USA</span>.
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    The total amount for this order is <span className="font-semibold text-zinc-900 dark:text-white">$99.99</span>.
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    If you have any questions, please contact the customer service team.
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Thank you for your business!
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-white">Note:</span> This is a sample order for demonstration purposes.
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-white">Important:</span> Please ensure that all details are correct before processing the order.
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-white">Reminder:</span> Orders are processed within 1-2 business days.
                </p>
            </div>
        </>
    );
}