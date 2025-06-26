import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Listbox from "./Listbox";
import ListboxOption from "./ListboxOption";
import ListboxLabel from "./ListboxLabel";

export default function ExampleListbox() {
  return (
    <Field>
      <Label>Project status</Label>
      <Listbox name="status" placeholder="Select status&hellip;">
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
  )
}
