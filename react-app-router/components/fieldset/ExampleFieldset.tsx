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

export default function ExampleFieldset() {
    return (
        <>
            <Label>Basic</Label>
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

            <Label>With grid layout</Label>
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
        </>
    )
}