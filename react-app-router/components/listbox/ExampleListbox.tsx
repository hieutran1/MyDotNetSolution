import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Listbox from "./Listbox";
import ListboxOption from "./ListboxOption";
import ListboxLabel from "./ListboxLabel";
import DemoComponent from "../DemoComponent";
import { useState } from "react";
import { Avatar } from "../avatar";
import { USERS } from "test-data";
import ListboxDescription from "./ListboxDescription";
import { ErrorMessage } from "../fieldset";
import * as Headless from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export default function ExampleListbox({
  users = USERS
}: {
  users: typeof USERS[0][]
}) {
  let [status, setStatus] = useState(null);
  let [user, setUser] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const errors = new Map<string, string>([
    ['status', 'The project status is required.']
  ]);

  return (
    <>
      <DemoComponent heading="Basic">
        <Field>
          <Label>Project status</Label>
          <Listbox name="status" defaultValue="active" value={status} onChange={setStatus}>
            <ListboxOption value="active">
              <ListboxLabel>Active</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="paused">
              <ListboxLabel>Paused</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="delayed">
              <ListboxLabel>Delayed</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="canceled">
              <ListboxLabel>Canceled</ListboxLabel>
            </ListboxOption>
          </Listbox>
        </Field>
      </DemoComponent>

      <DemoComponent heading="With avatars & secondary text">
        <Field>
          <Label>Assigned to</Label>
          <Listbox name="user"
            defaultValue={USERS[1].name}
            displayValue={(user: typeof USERS[0]) => user?.name}
            value={user}
            onChange={setUser}
            placeholder="Select user&hellip;">
            {users.map((user) => (
              <ListboxOption key={user.id} value={user}>
                <Avatar src={user.avatarUrl} initials={user.initials}
                  className="bg-purple-500 text-white" alt="" />
                <ListboxLabel>{user.name}</ListboxLabel>
                <ListboxDescription>@{user.handle}</ListboxDescription>
              </ListboxOption>
            ))}
          </Listbox>
        </Field>
      </DemoComponent>

      <DemoComponent heading="Disabled state">
        <Field disabled>
          <Label>Project status</Label>
          <Listbox name="status" defaultValue="delayed">
            <ListboxOption value="active">
              <ListboxLabel>Active</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="paused">
              <ListboxLabel>Paused</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="delayed">
              <ListboxLabel>Delayed</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="canceled">
              <ListboxLabel>Canceled</ListboxLabel>
            </ListboxOption>
          </Listbox>
        </Field>
      </DemoComponent>

      <DemoComponent heading="Validation errors">
        <Field>
          <Label>Project status</Label>
          <Listbox name="status" placeholder="Select status&hellip;" invalid={errors.has('status')}>
            <ListboxOption value="active">
              <ListboxLabel>Active</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="paused">
              <ListboxLabel>Paused</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="delayed">
              <ListboxLabel>Delayed</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="canceled">
              <ListboxLabel>Canceled</ListboxLabel>
            </ListboxOption>
          </Listbox>
          {errors.has('status') && <ErrorMessage>{errors.get('status')}</ErrorMessage>}
        </Field>
      </DemoComponent>

      <DemoComponent heading="Controlled component">
        <Field>
          <Label>Project status</Label>
          <Listbox name="status" value={status} onChange={setStatus} placeholder="Select status&hellip;">
            <ListboxOption value="active">
              <ListboxLabel>Active</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="paused">
              <ListboxLabel>Paused</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="delayed">
              <ListboxLabel>Delayed</ListboxLabel>
            </ListboxOption>
            <ListboxOption value="canceled">
              <ListboxLabel>Canceled</ListboxLabel>
            </ListboxOption>
          </Listbox>
        </Field>
      </DemoComponent>

      <DemoComponent heading="From HeadlessUI">
        <Headless.Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <Headless.ListboxButton
            className={
              'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white' +
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            }
          >
            {selectedPerson.name}
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
              aria-hidden="true"
            />
          </Headless.ListboxButton>
          <Headless.ListboxOptions
            anchor="bottom"
            transition
            className={
              'w-(--button-width) rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:--spacing(1)] focus:outline-none' +
              'transition duration-100 ease-in data-leave:data-closed:opacity-0'
            }
          >
            {people.map((person) => (
              <Headless.ListboxOption
                key={person.name}
                value={person}
                className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
              >
                <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
                <div className="text-sm/6 text-white">{person.name}</div>
              </Headless.ListboxOption>
            ))}
          </Headless.ListboxOptions>
        </Headless.Listbox>
      </DemoComponent>
    </>

  )
}
