import { Avatar } from '@/components/avatar';
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu
} from '@/components/dropdown';
import {
    Navbar,
    NavbarItem,
    NavbarSection,
    NavbarSpacer
} from '@/components/navbar';
import {
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarHeading,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer,
} from '@/components/sidebar';
import { SidebarLayout } from '@/layouts/sidebar-layout'
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid'
import {
    Cog6ToothIcon,
    HomeIcon,
    InboxIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    Square2StackIcon,
    TicketIcon,
} from '@heroicons/react/20/solid'
import { Outlet } from 'react-router';

export default function DemoSidebarLayout({ children }: { children?: React.ReactNode }) {
    return (
        <SidebarLayout
            navbar={
                <Navbar>
                    <NavbarSpacer />
                    <NavbarSection>
                        <NavbarItem href="/search" aria-label="Search">
                            <MagnifyingGlassIcon />
                        </NavbarItem>
                        <NavbarItem href="/inbox" aria-label="Inbox">
                            <InboxIcon />
                        </NavbarItem>
                        <Dropdown>
                            <DropdownButton as={NavbarItem}>
                                <Avatar src="/asset/profile-photo.jpg" square />
                            </DropdownButton>
                            <DropdownMenu className="min-w-64" anchor="bottom end">
                                <DropdownItem href="/my-profile">
                                    <UserIcon />
                                    <DropdownLabel>My profile</DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/settings">
                                    <Cog8ToothIcon />
                                    <DropdownLabel>Settings</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/privacy-policy">
                                    <ShieldCheckIcon />
                                    <DropdownLabel>Privacy policy</DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/share-feedback">
                                    <LightBulbIcon />
                                    <DropdownLabel>Share feedback</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/logout">
                                    <ArrowRightStartOnRectangleIcon />
                                    <DropdownLabel>Sign out</DropdownLabel>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarSection>
                </Navbar>
            }
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <SidebarSection>
                            <Dropdown>
                                <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                                    <Avatar src="/asset/tailwind-logo.svg" />
                                    <SidebarLabel>Tailwind Labs</SidebarLabel>
                                    <ChevronDownIcon />
                                </DropdownButton>
                                <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
                                    <DropdownItem href="/teams/1/settings">
                                        <Cog8ToothIcon />
                                        <DropdownLabel>Settings</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href="/teams/1">
                                        <Avatar slot="icon" src="/asset/tailwind-logo.svg" />
                                        <DropdownLabel>Tailwind Labs</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownItem href="/teams/2">
                                        <Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
                                        <DropdownLabel>Workcation</DropdownLabel>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem href="/teams/create">
                                        <PlusIcon />
                                        <DropdownLabel>New team&hellip;</DropdownLabel>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </SidebarSection>

                        <SidebarSection className="max-lg:hidden">
                            <SidebarItem href="/layouts/sidebar/search">
                                <MagnifyingGlassIcon />
                                <SidebarLabel>Search</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/layouts/sidebar/inbox">
                                <InboxIcon />
                                <SidebarLabel>Inbox</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                    </SidebarHeader>
                    <SidebarBody>
                        <SidebarSection>
                            <SidebarItem href="/demo">
                                <HomeIcon />
                                <SidebarLabel>Home</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/demo/events">
                                <Square2StackIcon />
                                <SidebarLabel>Events</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/demo/orders">
                                <TicketIcon />
                                <SidebarLabel>Orders</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/demo/settings">
                                <Cog6ToothIcon />
                                <SidebarLabel>Settings</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                        <SidebarSection className="max-lg:hidden">
                            <SidebarHeading>Upcoming Events</SidebarHeading>
                            <SidebarItem href="/events/1">Bear Hug: Live in Concert</SidebarItem>
                            <SidebarItem href="/events/2">Viking People</SidebarItem>
                            <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
                            <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
                        </SidebarSection>
                        <SidebarSpacer />
                        <SidebarSection>
                            <SidebarItem href="/support">
                                <QuestionMarkCircleIcon />
                                <SidebarLabel>Support</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/changelog">
                                <SparklesIcon />
                                <SidebarLabel>Changelog</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                    </SidebarBody>
                    <SidebarFooter className="max-lg:hidden">
                        <Dropdown>
                            <DropdownButton as={SidebarItem}>
                                <span className="flex min-w-0 items-center gap-3">
                                    <Avatar src="/asset/profile-photo.jpg" className="size-10" square alt="" />
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
                                        <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                                            erica@example.com
                                        </span>
                                    </span>
                                </span>
                                <ChevronUpIcon />
                            </DropdownButton>
                            <DropdownMenu className="min-w-64" anchor="top start">
                                <DropdownItem href="/my-profile">
                                    <UserIcon />
                                    <DropdownLabel>My profile</DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/settings">
                                    <Cog8ToothIcon />
                                    <DropdownLabel>Settings</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/privacy-policy">
                                    <ShieldCheckIcon />
                                    <DropdownLabel>Privacy policy</DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/share-feedback">
                                    <LightBulbIcon />
                                    <DropdownLabel>Share feedback</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/logout">
                                    <ArrowRightStartOnRectangleIcon />
                                    <DropdownLabel>Sign out</DropdownLabel>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </SidebarFooter>
                </Sidebar>
            }
        >
            {children}
            <Outlet />
        </SidebarLayout>
    )
}
