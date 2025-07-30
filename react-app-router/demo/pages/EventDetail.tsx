import type { Route } from ".react-router/types/app/+types/root";
import { Heading, Subheading } from "@/components/heading";
import { EVENTS, ORDERS } from "test-data";
import * as Headless from "@headlessui/react";
import { Button } from "@/components/button";
import Badge from "@/components/badge/Badge";
import Divider from "@/components/divider/Divider";
import Table from "@/components/table/Table";
import TableHead from "@/components/table/TableHead";
import TableRow from "@/components/table/TableRow";
import TableHeader from "@/components/table/TableHeader";
import TableBody from "@/components/table/TableBody";
import TableCell from "@/components/table/TableCell";

export default function EventDetail({
    params
}: Route.ComponentProps
) {
    const event = EVENTS[0];

    return (
        <>
            <div className="max-lg:hidden">
                <Headless.DataInteractive as="a" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400" href="/demo/events">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 fill-zinc-400 dark:fill-zinc-500">
                        <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd"></path>
                    </svg>
                    Events
                </Headless.DataInteractive>
            </div>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                    <div className="w-32 shrink-0">
                        <img className="aspect-3/2 rounded-lg shadow-sm" src={`/asset/events/${event.eventImage}`} alt="event img" />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <Heading>{event.name}</Heading>
                            <Badge color="lime">On Sale</Badge>
                        </div>
                        <div className="mt-2 text-sm/6 text-zinc-500">
                            {'May 20, 2024'}{' at '}{'10 PM'}
                            <span aria-hidden="true">{' · '}</span>
                            {event.playAt}
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button outline>Edit</Button>
                    <Button>View</Button>
                </div>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
                <div>
                    <Divider role="presentation" className="w-full border-t" />
                    <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total revenue</div>
                    <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{'$102,552'}</div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">
                        <Badge color="lime">+3.2%</Badge>
                        <span className="text-zinc-500">from last week</span>
                    </div>
                </div>
                <div>
                    <Divider role="presentation" className="w-full border-t" />
                    <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Tickets sold</div>
                    <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{event.soldTickets}/{event.saleTickets}</div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">
                        <Badge color="lime">+8.1%</Badge>
                        <span className="text-zinc-500">from last week</span>
                    </div>
                </div>
                <div>
                    <Divider role="presentation" className="w-full border-t" />
                    <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Pageviews</div>
                    <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{'24,300'}</div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">
                        <Badge color="pink">-0.75%</Badge>
                        <span className="text-zinc-500">from last week</span>
                    </div>
                </div>
            </div>

            <Subheading className="mt-12">Recent orders</Subheading>
            <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
                <TableHead>
                    <TableRow>
                        <TableHeader>Order number</TableHeader>
                        <TableHeader>Purchase date</TableHeader>
                        <TableHeader>Customer</TableHeader>
                        <TableHeader className="text-right">Amount</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ORDERS.map((order, index) => {
                        if (index >= 10) { return; }
                        return (
                            <TableRow key={order.orderNumber} href={`/demo/orders/${order.orderNumber}`}>
                                <TableCell tabIndex={0}>{order.orderNumber}</TableCell>
                                <TableCell className="text-zinc-500">{order.purchaseDate}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell className="text-right">{order.amount}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    );
}