import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
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
} from '@heroicons/react/20/solid';
import Avatar from 'components/avatar/Avatar';
import Dropdown from 'components/dropdown/Dropdown';
import DropdownButton from 'components/dropdown/DropdownButton';
import DropdownDivider from 'components/dropdown/DropdownDivider';
import DropdownItem from 'components/dropdown/DropdownItem';
import DropdownLabel from 'components/dropdown/DropdownLabel';
import DropdownMenu from 'components/dropdown/DropdownMenu';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';
import SidebarLabel from './SidebarLabel';
import SidebarSection from './SidebarSection';
import SidebarBody from './SidebarBody';
import SidebarSpacer from './SidebarSpacer';
import SidebarFooter from './SidebarFooter';
import Sidebar from './Sidebar';

export default function ExampleSidebar() {
  return (
    <div
      className='relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950'>
      <div
        className='fixed inset-y-0 left-0 w-64 max-lg:hidden'>
        <Sidebar>
          <SidebarHeader>
            <SidebarSection>
              <Dropdown>
                <DropdownButton as={SidebarItem} className="mb-2.5">
                  <Avatar src="/asset/tailwind-logo.svg" />
                  <SidebarLabel>Tailwind Labs</SidebarLabel>
                  <ChevronDownIcon />
                </DropdownButton>
                <DropdownMenu className="min-w-80 lg:min-w-64 " anchor="bottom start">
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

            <SidebarSection className='max-lg:hidden'>
              <SidebarItem href="/search">
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/inbox">
                <InboxIcon />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/home">
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/events">
                <Square2StackIcon />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <TicketIcon />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/broadcasts">
                <MegaphoneIcon />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
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
          <SidebarFooter>
            <SidebarSection>
              <span className='relative'>
                <Dropdown>
                  <DropdownButton as={SidebarItem}>
                    <span className="flex min-w-0 items-center gap-3">
                      <Avatar src="/asset/profile-photo.jpg" className="size-10" square alt="hel" />
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
              </span>

            </SidebarSection>

          </SidebarFooter>
        </Sidebar>
      </div>
    </div>

  )
}
