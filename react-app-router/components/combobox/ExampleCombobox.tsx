import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Combobox from "./Combobox";
import ComboboxOption from "./ComboboxOption";
import ComboboxLabel from "./ComboboxLabel";
import ComboboxDescription from "./ComboboxDescription";

export default function ExampleCombobox({
    currentUser,
    users,
    currentCountry,
    countries
}: {
    currentUser: { name: string } | null;
    users: { name: string, role: string }[];
    currentCountry: { name: string; code: string } | null;
    countries: { name: string; code: string }[];
}) {
    return (
        <>
            <Label>Basic</Label>
            <Field>
                <Label>Assigned to</Label>
                <Combobox name="user" options={users} displayValue={(user: { name: string }) => user?.name} defaultValue={currentUser}>
                    {(user: { name: string }) => (
                        <ComboboxOption value={user}>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                        </ComboboxOption>
                    )}
                </Combobox>
            </Field>

            <Label>With flags</Label>
            <Field>
                <Label>Country</Label>
                <Combobox
                    name="country"
                    options={countries}
                    displayValue={(country) => country?.name}
                    defaultValue={currentCountry}
                >
                    {(country) => (
                        <ComboboxOption value={country}>
                            {/* <Flag className="w-5 sm:w-4" code={country.code} /> */}
                            <ComboboxLabel>{country.name}</ComboboxLabel>
                        </ComboboxOption>
                    )}
                </Combobox>
            </Field>

            <Label>With secondary text</Label>
            <Field>
                <Label>Assigned to</Label>
                <Combobox name="user" options={users} displayValue={(user) => user?.name} defaultValue={currentUser}>
                    {(user) => (
                        <ComboboxOption value={user}>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                            <ComboboxDescription>{user.role}</ComboboxDescription>
                        </ComboboxOption>
                    )}
                </Combobox>
            </Field>
        </>
    )

}