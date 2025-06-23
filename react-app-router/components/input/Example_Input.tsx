import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Input from "./Input";
import ErrorMessage from "components/fieldset/ErrorMessage";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import InputGroup from "./InputGroup";

export default function Example_Input({
    errors
}: {
    errors: Map<string, string>
}) {
    return (
        <>
            <Field>
                <Label>Full name</Label>
                <Input name="full_name" invalid={errors.has('full_name')} />
                {errors.has('full_name') && <ErrorMessage>{errors.get('full_name')}</ErrorMessage>}
            </Field>

            <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search&hellip;" aria-label="Search" />
            </InputGroup>
        </>
    )
}