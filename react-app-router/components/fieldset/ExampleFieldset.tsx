import Text from "components/text/Text";
import Fieldset from "./Fieldset";
import Legend from "./Legend";
import FieldGroup from "./FieldGroup";
import Field from "./Field";
import Label from "./Label";
import Description from "./Description";
import Input from "components/input/Input";
import Select from "components/select/Select";
import Textarea from "components/textarea/Textarea";
import DemoComponent from "../DemoComponent";
import * as Headless from "@headlessui/react";

export default function ExampleFieldset() {
    return (
        <>
            <DemoComponent heading="Basic">
                <form action="/orders" method="POST">
                    {/* ... */}
                    <Fieldset>
                        <Legend>Shipping details</Legend>
                        <Text>Without this your odds of getting your order are low.</Text>

                        <FieldGroup>
                            <Field>
                                <Label>Street address</Label>
                                <Input name="street_address" />
                            </Field>
                            <Field>
                                <Label>Country</Label>
                                <Select name="country">
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>United States</option>
                                </Select>
                                <Description>We currently only ship to North America.</Description>
                            </Field>
                            <Field>
                                <Label>Delivery notes</Label>
                                <Textarea name="notes" />
                                <Description>If you have a tiger, we'd like to know about it.</Description>
                            </Field>
                        </FieldGroup>
                    </Fieldset>
                    {/* ... */}
                </form>
            </DemoComponent>

            <DemoComponent heading="With grid layout">
                <form action="/orders" method="POST">
                    {/* ... */}
                    <Fieldset>
                        <Legend>Shipping details</Legend>
                        <Text>Without this your odds of getting your order are low.</Text>
                        <FieldGroup>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
                                <Field>
                                    <Label>First name</Label>
                                    <Input name="first_name" />
                                </Field>
                                <Field>
                                    <Label>Last name</Label>
                                    <Input name="last_name" />
                                </Field>
                            </div>
                            <Field>
                                <Label>Street address</Label>
                                <Input name="street_address" />
                            </Field>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
                                <Field className="sm:col-span-2">
                                    <Label>Country</Label>
                                    <Select name="country">
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                        <option>United States</option>
                                    </Select>
                                </Field>
                                <Field>
                                    <Label>Postal code</Label>
                                    <Input name="postal_code" />
                                </Field>
                            </div>
                            <Field>
                                <Label>Delivery notes</Label>
                                <Textarea name="notes" />
                                <Description>If you have a tiger, we'd like to know about it.</Description>
                            </Field>
                        </FieldGroup>
                    </Fieldset>
                    {/* ... */}
                </form>
            </DemoComponent>

            <DemoComponent heading="With custom layout">
                <form action="/orders" method="POST">
                    {/* ... */}
                    <Fieldset>
                        <Legend>Shipping details</Legend>
                        <Text>Without this your odds of getting your order are low.</Text>
                        <div data-slot="control" className="grid grid-cols-1 items-center gap-x-4 gap-y-6 sm:grid-cols-3">
                            <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
                                <Label>Full name</Label>
                                <Input className="mt-3 sm:col-span-2 sm:mt-0" name="full_name" />
                            </Headless.Field>
                            <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
                                <Label>Street address</Label>
                                <Input className="mt-3 sm:col-span-2 sm:mt-0" name="street_address" />
                            </Headless.Field>
                            <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
                                <Label>Country</Label>
                                <Select className="mt-3 sm:col-span-2 sm:mt-0" name="country">
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>United States</option>
                                </Select>
                            </Headless.Field>
                            <Headless.Field className="grid grid-cols-subgrid sm:col-span-3">
                                <Label>Delivery notes</Label>
                                <Textarea className="mt-3 sm:col-span-2 sm:mt-0" name="notes" />
                            </Headless.Field>
                        </div>
                    </Fieldset>
                    {/* ... */}
                </form>
            </DemoComponent>

            <DemoComponent heading="Disabled state">
                <form action="/orders" method="POST">
                    {/* ... */}
                    <Fieldset disabled>
                        <Legend>Shipping details</Legend>
                        <Text>Without this your odds of getting your order are low.</Text>
                        <FieldGroup>
                            <Field>
                                <Label>Street address</Label>
                                <Input name="street_address" />
                            </Field>
                            <Field>
                                <Label>Country</Label>
                                <Select name="country">
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>United States</option>
                                </Select>
                                <Description>We currently only ship to North America.</Description>
                            </Field>
                            <Field>
                                <Label>Delivery notes</Label>
                                <Textarea name="notes" />
                                <Description>If you have a tiger, we'd like to know about it.</Description>
                            </Field>
                        </FieldGroup>
                    </Fieldset>
                    {/* ... */}
                </form>
            </DemoComponent>
        </>
    )
}