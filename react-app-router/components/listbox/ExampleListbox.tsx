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

export default function ExampleListbox({
  users = USERS
}: {
  users: typeof USERS[0][]
}) {
  let [status, setStatus] = useState(null);
  let [user, setUser] = useState(null);

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
    </>

  )
}
