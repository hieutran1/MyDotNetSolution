import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Input from "./Input";
import ErrorMessage from "components/fieldset/ErrorMessage";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import InputGroup from "./InputGroup";
import Heading from "components/heading/Heading";
import * as Headless from "@headlessui/react";
import { useState } from "react";

export default function ExampleInput({
    errors = new Map<string, string>([
        ["full_name", "This field is required."],
        ["first_name", "This field is required."]
    ])
}: {
    errors: Map<string, string>
}) {
    let [name, setName] = useState('');

    return (
        <div className="max-w-2xl">
            <Heading>Basic</Heading>
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <Field>
                        <Label>Full name</Label>
                        <Input name="full_name" />
                    </Field>
                </div>
            </div>

            <Heading>With icon</Heading>
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <InputGroup>
                        <MagnifyingGlassIcon />
                        <Input name="search" placeholder="Search&hellip;" aria-label="Search" />
                    </InputGroup>
                </div>
            </div>

            <Heading>Setting the type</Heading>
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <Field>
                        <Label>Your website</Label>
                        <Input type="url" name="url" />
                    </Field>
                </div>
            </div>

            <Heading>Validation errors</Heading>
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <Field>
                        <Label>Full name</Label>
                        <Input name="full_name" invalid={errors.has('full_name')} />
                        {errors.has('full_name') && <ErrorMessage>{errors.get('full_name')}</ErrorMessage>}
                    </Field>
                </div>
            </div>

            <Heading>Constraining width & with custom layout & controlled component</Heading>
            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <Field>
                        <Label>CVC</Label>
                        <Input className="max-w-24" name="cvc" pattern="[0-9]*" />
                    </Field>
                </div>
            </div>

            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <Headless.Field className="flex items-center justify-center gap-6">
                        <Label>Full name</Label>
                        <Input name="full_name" className="max-w-48" />
                    </Headless.Field>
                </div>
            </div>

            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <Headless.Field className="flex items-center justify-center gap-6">
                        <Label>Full name</Label>
                        <Input name="full_name" className="max-w-48" />
                    </Headless.Field>
                </div>
            </div>

            <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
                <div className="w-full max-w-sm">
                    <Field>
                        <Label>Full name</Label>
                        <Input name="full_name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Field>
                </div>
            </div>
        </div>
    )
}