import Field from "components/fieldset/Field";
import Label from "components/fieldset/Label";
import Combobox from "./Combobox";
import ComboboxOption from "./ComboboxOption";
import ComboboxLabel from "./ComboboxLabel";
import ComboboxDescription from "./ComboboxDescription";
import { Subheading } from "../heading";
import { COUNTRIES, USERS } from "test-data";
import { useState } from "react";
import { Avatar } from "../avatar";
import FlagC from "flags/Flag";
import ErrorMessage from "../fieldset/ErrorMessage";
import * as Headless from "@headlessui/react";

export default function ExampleCombobox({
    currentUser, // = USERS[0],
    users = USERS,
    currentCountry = COUNTRIES[0],
    countries = COUNTRIES
}: {
    currentUser: typeof USERS[0] | null;
    users: typeof USERS[0][];
    currentCountry: typeof COUNTRIES[0] | null;
    countries: typeof COUNTRIES[0][];
}) {

    const [country, setCountry] = useState(currentCountry);
    let [user, setUser] = useState({...currentUser});
    let [user1, setUser1] = useState({...currentUser});
    let [user2, setUser2] = useState({...currentUser});

    return (
        <div className="w-full max-w-xs">
            <Subheading>Basic</Subheading>
            <Field>
                <Label>Assigned to</Label>
                <Combobox
                    name="user"
                    // defaultValue={currentUser}
                    aria_label="Assigned to"
                    
                    options={[...users]}
                    value={user}
                    displayValue={(user: typeof USERS[0]) => user?.name}
                    onChange={setUser}

                    placeholder="Select user&hellip;"
                    filter={(user: typeof USERS[0], query: string) =>
                        user.name.toLowerCase().includes(query.toLowerCase()) ||
                        `@${user.handle}`.toLowerCase().includes(query.toLowerCase())
                    }
                >
                    {(user: typeof USERS[0]) => (
                        <ComboboxOption value={user} key={user.name}>
                            <Avatar src={user.avatarUrl} initials={user.initials}
                                className="bg-purple-500 text-white"
                                alt=""></Avatar>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                        </ComboboxOption>
                    )}
                </Combobox>
            </Field>

            <Subheading>With flags</Subheading>
            <Field>
                <Label>Country</Label>
                <Combobox
                    name="country"
                    // defaultValue={currentCountry}
                    
                    options={countries}
                    value={country}
                    displayValue={(country) => country?.name}
                    onChange={setCountry}

                    placeholder="Select country&hellip;"
                    filter={(country: typeof COUNTRIES[0], query: string) =>
                        country.name.toLowerCase().includes(query.toLowerCase()) ||
                        `@${country.code}`.toLowerCase().includes(query.toLowerCase())
                    }
                >
                    {(country: typeof COUNTRIES[0]) => (
                        <ComboboxOption value={country} key={country.code}>
                            <FlagC className="w-5 sm:w-4" code={country.code} />
                            <ComboboxLabel>{country.name}</ComboboxLabel>
                        </ComboboxOption>
                    )}
                </Combobox>
            </Field>

            <Subheading>With secondary text & validation errors & constraining width</Subheading>
            <Field>
                <Label>Assigned to</Label>
                <Combobox
                    name="user"
                    // defaultValue={currentUser}
                    
                    options={[...users]}
                    value={user1}
                    displayValue={(user) => user?.name}
                    onChange={setUser1}
                    
                    placeholder="Select user&hellip;"

                    className="max-w-40"
                    filter={(user: typeof USERS[0], query: string) =>
                        user.name.toLowerCase().includes(query.toLowerCase())
                    }
                >
                    {(user: typeof USERS[0]) => (
                        <ComboboxOption value={user} key={user.handle}>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                            <ComboboxDescription>{user.role}</ComboboxDescription>
                        </ComboboxOption>
                    )}
                </Combobox>
                <ErrorMessage>A user is required.</ErrorMessage>
            </Field>

            <Subheading>With custom layout & controlled component & custom filter</Subheading>
            <Headless.Field className="flex grow items-baseline justify-center gap-6">
                <Label>Assigned to</Label>
                <Combobox
                    name="user"
                    // defaultValue={currentUser}
                    className="max-w-48"
                    
                    options={[...users]}
                    value={user2}
                    displayValue={(user) => user.name}
                    onChange={setUser2}

                    placeholder="Select user&hellip;"

                    filter={(user: typeof USERS[0], query: string) =>
                        user.name.toLowerCase().includes(query.toLowerCase()) ||
                        `@${user.handle}`.toLowerCase().includes(query.toLowerCase())
                    }
                >
                    {(user: typeof USERS[0]) => (
                        <ComboboxOption value={user} key={user.handle}>
                            <ComboboxLabel>{user.name}</ComboboxLabel>
                            <ComboboxDescription>@{user.handle}</ComboboxDescription>
                        </ComboboxOption>
                    )}
                </Combobox>
            </Headless.Field>
        </div>
    )
}