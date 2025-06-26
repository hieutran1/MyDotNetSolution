import Label from "components/fieldset/Label";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function ExampleButton() {
  return (
    <>
      <Label>Basic</Label>
      <Button>Save changes</Button>

      <Label>Button colors</Label>
      <Button color="cyan">Save changes</Button>

      <Label>Outline buttons</Label>
      <Button outline>Save draft</Button>

      <Label>Plain buttons</Label>
      <Button plain>Plain</Button>

      <Label>Disabled states</Label>
      <Button disabled>Disabled</Button>

      <Label>With icon</Label>
      <Button>
        <PlusIcon />
        Add item
      </Button>

      <Label>Using as a link</Label>
      <Button href="/get-started">Get started</Button>
    </>
  );
}