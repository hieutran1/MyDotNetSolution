import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Textarea from "./Textarea";
import DemoComponent from "../DemoComponent";
import { Description, ErrorMessage } from "../fieldset";
import * as Headless from "@headlessui/react";
import { useState } from "react";

export default function ExampleTextarea() {
    let [description, setDescription] = useState('');

    const errors = new Map<string, string>([
        ['description', 'The field is required.']
    ]);

    return (
        <>
            <DemoComponent heading="Basic">
                <Field>
                    <Label>Description</Label>
                    <Textarea name="description" />
                </Field>
            </DemoComponent>
            <DemoComponent heading="Disabled state">
                <Field disabled>
                    <Label>Description</Label>
                    <Textarea name="description" />
                </Field>
            </DemoComponent>
            <DemoComponent heading="Validation errors">
                <Field>
                    <Label>Description</Label>
                    <Textarea name="description" invalid={errors.has('description')} />
                    {errors.has('description') && <ErrorMessage>{errors.get('description')}</ErrorMessage>}
                </Field>
            </DemoComponent>
            <DemoComponent heading="Custom layout"
                classNameContainer="flex w-full max-w-2xl justify-center">
                <Headless.Field className="grid grid-cols-12 gap-6">
                    <div className="col-span-5">
                        <Label>Description</Label>
                        <Description className="mt-1">This will be shown under the product title.</Description>
                    </div>
                    <div className="col-span-7">
                        <Textarea name="description" rows={3} />
                    </div>
                </Headless.Field>
            </DemoComponent>
            <DemoComponent heading="Controlled component">
                <Field>
                    <Label>Description</Label>
                    <Textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Field>
            </DemoComponent>
        </>
    )
}