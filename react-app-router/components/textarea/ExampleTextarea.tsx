import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Textarea from "./Textarea";

export function ExampleTextarea() {
    return (
        <Field>
            <Label>Description</Label>
            <Textarea name="description" />
        </Field>
    )
}