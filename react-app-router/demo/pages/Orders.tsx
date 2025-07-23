import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableCell from "@/components/table/TableCell";
import TableHead from "@/components/table/TableHead";
import TableHeader from "@/components/table/TableHeader";
import TableRow from "@/components/table/TableRow";
import { ORDERS } from "test-data";

export default function Orders() {
    return (
        <>
            <div className="flex items-end justify-between gap-4">
                <Heading>Orders</Heading>
                <Button className="-my-0.5">Create order</Button>
            </div>

            <Table className="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
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
                        <TableRow key={order.orderNumber} href={`/demo/orders/${order.orderNumber}`}>
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
    )
}
