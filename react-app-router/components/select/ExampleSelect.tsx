import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Select from "./Select";
import ErrorMessage from "components/fieldset/ErrorMessage";

type ErrorHandler = {
    has: (field: string) => boolean;
    get: (field: string) => string;
    set: (field: string, message: string) => void;
};

export default function ExampleSelect({ errors }: {
    errors: ErrorHandler
}) {
    return (
        <>
            <Label>Basic</Label>
            <Field>
                <Label>Project status</Label>
                <Select name="status">
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="delayed">Delayed</option>
                    <option value="canceled">Canceled</option>
                </Select>
            </Field>

            <Label>Validation errors<Field>
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
            </Field></Label>
        </>
    )
}