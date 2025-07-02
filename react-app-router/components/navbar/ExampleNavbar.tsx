import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Avatar from 'components/avatar/Avatar'
import Navbar from './Navbar'
import NavbarLabel from './NavbarLabel'
import NavbarDivider from './NavbarDivider'
import NavbarSection from './NavbarSection'
import NavbarItem from './NavbarItem'
import NavbarSpacer from './NavbarSpacer'
import DropdownButton from 'components/dropdown/DropdownButton'
import Dropdown from 'components/dropdown/Dropdown'
import DropdownMenu from 'components/dropdown/DropdownMenu'
import DropdownItem from 'components/dropdown/DropdownItem'
import DropdownLabel from 'components/dropdown/DropdownLabel'
import DropdownDivider from 'components/dropdown/DropdownDivider'

export default function ExampleNavbar() {
  return (
    <div className='-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900'>
      <Navbar>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src="/asset/tailwind-logo.svg" />
            <NavbarLabel>Tailwind Labs</NavbarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom start">
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

        <NavbarDivider className="max-lg:hidden" />

        <NavbarSection className="max-lg:hidden">
          <NavbarItem href="/" current={true}>
            Home
          </NavbarItem>
          <NavbarItem href="/events">Events</NavbarItem>
          <NavbarItem href="/orders">Orders</NavbarItem>
        </NavbarSection>

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
    </div>

  )
}
