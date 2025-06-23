import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Textarea from "./Textarea";

export function Example_Textarea() {
    return (
        <Field>
            <Label>Description</Label>
            <Textarea name="description" />
        </Field>
    )
}