import Label from "components/fieldset/Label";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Subheading } from "../heading";

export default function ExampleButton() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <div className="-mx-6 flex-column min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
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
      </div>
    </div>
  );
}