import { Avatar } from "@/components/avatar";
import Divider from "@/components/divider/Divider";
import { Heading, Subheading } from "@/components/heading";
import { Select } from "@/components/select";
import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableCell from "@/components/table/TableCell";
import TableHead from "@/components/table/TableHead";
import TableHeader from "@/components/table/TableHeader";
import TableRow from "@/components/table/TableRow";
import * as Headless from "@headlessui/react";
import { ORDERS } from "test-data";

export default function Home() {
    return (
        <>
            <Heading>Good afternoon, Erica</Heading>
            <div className="mt-8 flex items-end justify-between">
                <Subheading>Overview</Subheading>
                <div>
                    <Select name="period" value="last_week">
                        <option value="last_week">Last week</option>
                        <option value="last_two_weeks">Last two weeks</option>
                        <option value="last_month">Last month</option>
                        <option value="last_quarter">Last quarter</option>
                    </Select>
                </div>
            </div>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <div>
                    <Divider role="presentation" className="w-full border-t" />
                    <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Total revenue</div>
                    <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$2.6M</div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
                            +4.5%
                        </span>
                        <span className="text-zinc-500">from last week</span>
                    </div>
                </div>
                <div>
                    <Divider role="presentation" className="w-full border-t" />
                    <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Average order value</div>
                    <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$455</div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-pink-400/15 text-pink-700 group-data-hover:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-hover:bg-pink-400/20">
                            -0.5%
                        </span>
                        <span className="text-zinc-500">from last week</span>
                    </div>
                </div>
                <div>
                    <Divider role="presentation" className="w-full border-t" />
                    <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Tickets sold</div>
                    <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">5,888</div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
                            +4.5%
                        </span>
                        <span className="text-zinc-500">from last week</span>
                    </div>
                </div>
                <div>
                    <Divider role="presentation" className="w-full border-t" />
                    <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">Pageviews</div>
                    <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">823,067</div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
                            +21.2%
                        </span>
                        <span className="text-zinc-500">from last week</span>
                    </div>
                </div>
            </div>

            <Subheading className="mt-14">Recent orders</Subheading>
            <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
                <TableHead>
                    <TableRow>
                        <TableHeader>Order number</TableHeader>
                        <TableHeader>Purchase date</TableHeader>
                        <TableHeader>Customer</TableHeader>
                        <TableHeader>Event</TableHeader>
                        <TableHeader className="text-right">Amount</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ORDERS.map((order) => (
                        <TableRow key={order.orderNumber} href={`demo/orders/${order.orderNumber}`}>
                            <TableCell tabIndex={0}>{order.orderNumber}</TableCell>
                            <TableCell className="text-zinc-500">{order.purchaseDate}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar src={`/asset/events/${order.event[1]}`} className="size-6"></Avatar>
                                    <span>{order.event[0]}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">{order.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}