import type { Route } from ".react-router/types/app/+types/root";
import { Avatar } from "@/components/avatar";
import Badge from "@/components/badge/Badge";
import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/description-list";
import Divider from "@/components/divider/Divider";
import { Heading, Subheading } from "@/components/heading";
import { ORDERS } from "test-data";
import * as Headless from "@headlessui/react";
import FlagC from "flags/Flag";
import { Button } from "@/components/button";

export default function OrderDetail({
    params
}: Route.ComponentProps
) {
    const order = ORDERS[0];

    return <>
        <div className="max-lg:hidden">
            <Headless.DataInteractive as="a" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
                href="/demo/orders">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 fill-zinc-400 dark:fill-zinc-500">
                    <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd"></path>
                </svg>
                Orders
            </Headless.DataInteractive>
        </div>
        <div className="mt-4 lg:mt-8">
            <div className="flex items-center gap-4">
                <Heading>Order #{params.orderId}</Heading>
                <Badge color="lime">Successful</Badge>
            </div>
            <div className="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
                <div className="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
                    <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500">
                            <path fillRule="evenodd" d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z" clipRule="evenodd"></path>
                            <path d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z"></path>
                        </svg>
                        <span>US$299.00</span>
                    </span>
                    <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5V5h14v-.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                            <path fillRule="evenodd" d="M15 7H1v4.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V7ZM3 10.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd"></path>
                        </svg>
                        <span className="inline-flex gap-3">
                            Visa
                            <span>
                                <span aria-hidden="true">••••</span>
                                3897
                            </span>
                        </span>
                    </span>
                    <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500">
                            <path fillRule="evenodd" d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z" clipRule="evenodd"></path>
                        </svg>
                        <span>May 5, 2024</span>
                    </span>
                </div>
                <div className="flex gap-4">
                    <Button outline>Refund</Button>
                    <Button >Resend Invoice</Button>
                </div>
            </div>
        </div>
        <div className="mt-12">
            <Subheading>Summary</Subheading>
            <Divider role="presentation" className="mt-4 w-full border-t"></Divider>
            <DescriptionList>
                <DescriptionTerm>Customer</DescriptionTerm>
                <DescriptionDetails>{order.customer}</DescriptionDetails>

                <DescriptionTerm>Event</DescriptionTerm>
                <DescriptionDetails>
                    <Headless.DataInteractive as="a" href={`/demo/events/${order.event[1]}`}
                        aria-hidden="true"
                        className="flex items-center gap-2">
                        <Avatar src={`/asset/events/${order.event[1]}`} className="size-6" />

                        <span>{order.event[0]}</span>
                    </Headless.DataInteractive>
                </DescriptionDetails>

                <DescriptionTerm>Amount</DescriptionTerm>
                <DescriptionDetails>{order.amount}</DescriptionDetails>

                <DescriptionTerm>Amount after exchange rate</DescriptionTerm>
                <DescriptionDetails>{order.amount}{' → '}CA{'$409.13'}</DescriptionDetails>

                <DescriptionTerm>Fee</DescriptionTerm>
                <DescriptionDetails>CA$409.13</DescriptionDetails>

                <DescriptionTerm>Net</DescriptionTerm>
                <DescriptionDetails>CA$396.86</DescriptionDetails>
            </DescriptionList>
        </div>
        <div className="mt-12">
            <Subheading>Payment method</Subheading>
            <Divider role="presentation" className="mt-4 w-full border-t"></Divider>
            <DescriptionList>
                <DescriptionTerm>Transaction ID</DescriptionTerm>
                <DescriptionDetails>ch_1KLf7AsYJ0Dda7fs3CC5d46TY</DescriptionDetails>

                <DescriptionTerm>Card number</DescriptionTerm>
                <DescriptionDetails>•••• 3897</DescriptionDetails>

                <DescriptionTerm>Card type</DescriptionTerm>
                <DescriptionDetails>Visa</DescriptionDetails>

                <DescriptionTerm>Card expiry</DescriptionTerm>
                <DescriptionDetails>06 / 2024</DescriptionDetails>

                <DescriptionTerm>Owner</DescriptionTerm>
                <DescriptionDetails>Michael Foster</DescriptionDetails>

                <DescriptionTerm>Email address</DescriptionTerm>
                <DescriptionDetails>michael.foster@example.com</DescriptionDetails>

                <DescriptionTerm>Address</DescriptionTerm>
                <DescriptionDetails>357 Bridge St. New York, NY</DescriptionDetails>

                <DescriptionTerm>Country</DescriptionTerm>
                <DescriptionDetails>
                    <span className="inline-flex gap-3">
                        <img src="/flags/s/USA.svg" alt="USA" />
                        USA
                    </span>
                </DescriptionDetails>

                <DescriptionTerm>CVC</DescriptionTerm>
                <DescriptionDetails>
                    <Badge color="lime">Passed successfully</Badge>
                </DescriptionDetails>
            </DescriptionList>
        </div>
    </>;
}