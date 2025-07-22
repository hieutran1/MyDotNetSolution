import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Select from "./Select";
import ErrorMessage from "components/fieldset/ErrorMessage";
import DemoComponent from "../DemoComponent";
import * as Headless from "@headlessui/react";

export default function ExampleSelect(
    {
        errors = new Map<string, string>([
            ['status', 'The status is required.']
        ])
    }: {
        errors: Map<string, string>
    }) {
    return (
        <>
            <DemoComponent heading="Basic">
                <Field>
                    <Label>Project status</Label>
                    <Select name="status">
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="delayed">Delayed</option>
                        <option value="canceled">Canceled</option>
                    </Select>
                </Field>
            </DemoComponent>

            <DemoComponent heading="Disabled state">
                <Field disabled>
                    <Label>Project status</Label>
                    <Select name="status">
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="delayed">Delayed</option>
                        <option value="canceled">Canceled</option>
                    </Select>
                </Field>
            </DemoComponent>

            <DemoComponent heading="Disabled state by Headless">
                <Headless.Field disabled>
                    <Headless.Label className="data-disabled:opacity-50">Project status</Headless.Label>
                    <Headless.Description className="data-disabled:opacity-50">This will be visible to clients on the project.</Headless.Description>
                    <Headless.Select name="status" className="data-disabled:bg-gray-100">
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="delayed">Delayed</option>
                        <option value="canceled">Canceled</option>
                    </Headless.Select>
                </Headless.Field>
            </DemoComponent>

            <DemoComponent heading="Validation errors">
                <Field>
                    <Label>Project status</Label>
                    <Select name="status" defaultValue="" invalid={errors.has('status')}>
                        <option value="" disabled>
                            Select a status&hellip;
                        </option>
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="delayed">Delayed</option>
                        <option value="canceled">Canceled</option>
                    </Select>
                    {errors.has('status') && <ErrorMessage>{errors.get('status')}</ErrorMessage>}
                </Field>
            </DemoComponent>

        </>
    )
}