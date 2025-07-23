import Badge from "@/components/badge/Badge";
import { Button } from "@/components/button";
import Divider from "@/components/divider/Divider";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "@/components/dropdown";
import { Input, InputGroup } from "@/components/input";
import { Select } from "@/components/select";
import * as Headless from "@headlessui/react";
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { div } from "framer-motion/client";
import { EVENTS } from "test-data";

export default function Events() {
    return (
        <>
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-sm:w-full sm:flex-1">
                    <h1>Events</h1>
                    <div className="mt-4 flex max-w-xl gap-4">
                        <div className="flex-1">
                            <InputGroup>
                                <MagnifyingGlassIcon />
                                <Input name="search" placeholder="Search events&hellip;"></Input>
                            </InputGroup>
                        </div>
                        <div>
                            <Select name="sort_by">
                                <option value="name">Sort by name</option>
                                <option value="date">Sort by date</option>
                                <option value="status">Sort by status</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <Button>Create event</Button>
            </div>

            <ul className="mt-10">
                {EVENTS.map(event =>
                    <>
                        <li>
                            <Divider role="presentation" />
                            <div className="flex items-center justify-between">
                                <div className="flex gap-6 py-6">
                                    <div className="w-32 shrink-0">
                                        <Headless.DataInteractive as="a" href={`/demo/events/${event.eventNumber}`} aria-hidden="true">
                                            <img className="aspect-3/2 rounded-lg shadow-sm" src={`/asset/events/${event.eventImage}`} />
                                        </Headless.DataInteractive>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="text-base/6 font-semibold">
                                            <Headless.DataInteractive as="a" href={`/demo/events/${event.eventNumber}`}>
                                                {event.name}
                                            </Headless.DataInteractive></div>
                                        <div className="text-xs/6 text-zinc-500">{event.startDate}.{event.playAt}</div>
                                        <div className="text-xs/6 text-zinc-600">{event.soldTickets}/{event.saleTickets} tickets sold</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge className="max-sm:hidden" color={event.status == 'On Sale' ? "lime" : "dark/zinc"}>{event.status}</Badge>
                                    <Dropdown>
                                        <DropdownButton plain aria-label="More options">
                                            <EllipsisVerticalIcon />
                                        </DropdownButton>
                                        <DropdownMenu>
                                            <DropdownItem href={`/demo/events/${event.eventNumber}`}>View</DropdownItem>
                                            <DropdownItem >Edit</DropdownItem>
                                            <DropdownItem onClick={() => { }}>Delete</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </li>
                    </>
                )}
            </ul>
        </>
    );
}