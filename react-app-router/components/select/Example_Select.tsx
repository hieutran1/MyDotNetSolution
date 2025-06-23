import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Select from "./Select";

export default function Example() {
    return (
        <Field>
            <Label>Project status</Label>
            <Select name="status">
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option>
            </Select>
        </Field>
    )
}