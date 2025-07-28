import { Button } from "@/components/button";
import { Checkbox, CheckboxField } from "@/components/checkbox";
import Divider from "@/components/divider/Divider";
import { Label } from "@/components/fieldset";
import { Heading, Subheading } from "@/components/heading";
import { Input } from "@/components/input";
import Listbox from "@/components/listbox/Listbox";
import ListboxLabel from "@/components/listbox/ListboxLabel";
import ListboxOption from "@/components/listbox/ListboxOption";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import Textarea from "@/components/textarea/Textarea";
import FlagC from "flags/Flag";
import { useState } from "react";
import { COUNTRIES } from "test-data";

export default function Settings() {
    let [region, setRegion] = useState('ontario');
    let [selectedCountry, setSelectedCountry] = useState('Canada');

    return (
        <form className="mx-auto max-w-4xl">
            <Heading>Settings</Heading>

            <Divider className="my-10 mt-6 w-full border-t" role="presentation" />
            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Organization Name</Subheading>
                    <Text>This will be displayed on your public profile.</Text>
                </div>
                <div>
                    <Input name="name" value="Catalyst" />
                </div>
            </section>

            <Divider className="my-10 w-full border-t" soft role="presentation" />
            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Organization Bio</Subheading>
                    <Text>This will be displayed on your public profile. Maximum 240 characters.</Text>
                </div>
                <div>
                    <Textarea name="bio" />
                </div>
            </section>

            <Divider className="my-10 w-full border-t" soft role="presentation" />
            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Organization Email</Subheading>
                    <Text>This is how customers can contact you for support.</Text>
                </div>
                <div className="space-y-4">
                    <Input name="email" type="email" value="info@example.com"></Input>
                    <CheckboxField>
                        <Checkbox defaultChecked />
                        <Label>Show email on public profile</Label>
                    </CheckboxField>
                </div>
            </section>

            <Divider className="my-10 w-full border-t" soft role="presentation" />
            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Address</Subheading>
                    <Text>This is where your organization is registered.</Text>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <Input
                        name="address"
                        className="col-span-2"
                        placeholder="Street Address"
                        aria-label="Street Address"
                        defaultValue="147 Catalyst Ave" />
                    <Input
                        name="city"
                        className="col-span-2"
                        placeholder="City"
                        aria-label="City"
                        defaultValue="Toronto" />

                    <Listbox name="region" value={region} onChange={setRegion} placeholder="Select region&hellip;">
                        <ListboxOption value="nunavut">
                            <ListboxLabel>Nunavut</ListboxLabel>
                        </ListboxOption>
                        <ListboxOption value="ontario">
                            <ListboxLabel>Ontario</ListboxLabel>
                        </ListboxOption>
                        <ListboxOption value="prince_edward_island">
                            <ListboxLabel>Prince Edward Island</ListboxLabel>
                        </ListboxOption>
                    </Listbox>
                    <Input
                        name="postal_code"
                        placeholder="Postal Code"
                        aria-label="Postal code"
                        defaultValue="A1A 1A1" />

                    <Listbox name="country" value={selectedCountry} onChange={setSelectedCountry} className="col-span-2">
                        {
                            COUNTRIES.map(country => <>
                                <ListboxOption value={country} key={country.code}>
                                    <FlagC code={country.code} />
                                    <ListboxLabel>{country.name}</ListboxLabel>
                                </ListboxOption>
                            </>)
                        }
                    </Listbox>

                </div>
            </section>

            <Divider className="my-10 w-full border-t" soft role="presentation" />
            <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="space-y-1">
                    <Subheading>Currency</Subheading>
                    <Text>The currency that your organization will be collecting.</Text>
                </div>
                <div>
                    <Select name="currency" value="cad">
                        <option value="cad">CAD - Canadian Dollar</option>
                        <option value="usd">USD - United States Dollar</option>
                    </Select>
                </div>
            </section>

            <Divider className="my-10 w-full border-t" soft role="presentation" />
            <div className="flex justify-end gap-4">
                <Button plain type="reset">Reset</Button>
                <Button type="submit">Save changes</Button>
            </div>
        </form>
    )
}
