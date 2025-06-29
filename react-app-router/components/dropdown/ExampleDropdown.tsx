import { ArrowRightStartOnRectangleIcon, ChevronDownIcon, Cog8ToothIcon, InformationCircleIcon, MoonIcon, UserIcon } from "@heroicons/react/16/solid";
import Dropdown from "./Dropdown";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import DropdownHeading from "./DropdownHeading";
import DropdownSection from "./DropdownSection";
import DropdownDivider from "./DropdownDivider";
import DropdownLabel from "./DropdownLabel";
import DropdownHeader from "./DropdownHeader";
import AvatarButton from "components/avatar/AvatarButton";
import { Subheading } from "../heading";
import ExampleHeadlessMenu from "./ExampleHeadlessMenu";

export default function ExampleDropdown({
  signOut,
  currentUser = { avatarUrl: "https://avatars.githubusercontent.com/u/2?v=4" }
}: {
  signOut: () => void,
  currentUser: { avatarUrl: string }
}) {
  function deleteUser() {
    if (confirm('Are you sure you want to delete this user?')) {
      // ...
    }
  }

  return (
    <>
      <ExampleHeadlessMenu></ExampleHeadlessMenu>

      <Subheading>Basic</Subheading>
      <Dropdown>
        <DropdownButton outline>
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu>
          <DropdownItem href="/users/1">View</DropdownItem>
          <DropdownItem href="/users/1/edit">Edit</DropdownItem>
          <DropdownItem onClick={() => deleteUser()}>Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Subheading>With sections</Subheading>
      <Dropdown>
        <DropdownButton outline>
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu>
          <DropdownSection aria-label="Account">
            <DropdownItem href="/account">Account</DropdownItem>
            <DropdownItem href="/notifications">Notifications</DropdownItem>
            <DropdownItem href="/billing">Billing</DropdownItem>
          </DropdownSection>
          <DropdownDivider />
          <DropdownSection>
            <DropdownHeading>My events</DropdownHeading>
            <DropdownItem href="/upcoming-events">Upcoming events</DropdownItem>
            <DropdownItem href="/past-events">Past events</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>

      <Subheading>With icons</Subheading>
      <Dropdown>
        <DropdownButton outline>
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu anchor="bottom">
          <DropdownItem href="#">
            <UserIcon />
            <DropdownLabel>Account</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="#">
            <Cog8ToothIcon />
            <DropdownLabel>Settings</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="#">
            <InformationCircleIcon />
            <DropdownLabel>Help center</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">
            <MoonIcon />
            <DropdownLabel>Dark mode</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">
            <ArrowRightStartOnRectangleIcon />
            <DropdownLabel>Sign out</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Subheading>With header</Subheading>
      <Dropdown>
        <DropdownButton outline>
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu>
          <DropdownHeader>
            <div className="pr-6">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Signed in as Tom Cook</div>
              <div className="text-sm/7 font-semibold text-zinc-800 dark:text-white">tom@example.com</div>
            </div>
          </DropdownHeader>
          <DropdownDivider />
          <DropdownItem href="/my-profile">My profile</DropdownItem>
          <DropdownItem href="/notifications">Notifications</DropdownItem>
          <DropdownItem href="/security">Security</DropdownItem>
          <DropdownItem href="/billing">Billing</DropdownItem>
          <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Subheading>With avatar trigger</Subheading>
      <Dropdown>
        <DropdownButton className="size-8" as={AvatarButton} src={currentUser.avatarUrl} aria-label="Account options" />
        <DropdownMenu anchor="bottom">
          <DropdownItem href="/profile">My profile</DropdownItem>
          <DropdownItem href="/settings">Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}