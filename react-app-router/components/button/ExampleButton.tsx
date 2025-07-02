import Label from "components/fieldset/Label";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Subheading } from "../heading";

export default function ExampleButton() {
  return (
    <>
      <Subheading>Basic</Subheading>
      <Button>Save changes</Button>

      <Subheading>Button colors</Subheading>
      <Button color="cyan">Save changes</Button>

      <Subheading>Outline buttons</Subheading>
      <Button outline>Save draft</Button>

      <Subheading>Plain buttons</Subheading>
      <Button plain>Plain</Button>

      <Subheading>Disabled states</Subheading>
      <Button disabled>Disabled</Button>

      <Subheading>With icon</Subheading>
      <Button>
        <PlusIcon />
        Add item
      </Button>

      <Subheading>Using as a link</Subheading>
      <Button href="/get-started">Get started</Button>
    </>
  );
}