import Description from "components/fieldset/Description";
import Fieldset from "components/fieldset/Fieldset";
import Label from "components/fieldset/Label";
import Legend from "components/fieldset/Legend";
import Text from "components/text/Text";
import RadioGroup from "./RadioGroup";
import RadioField from "./RadioField";
import Radio from "./Radio";

export default function ExampleRadio() {
  return (
    <Fieldset>
      <Legend>Resale and transfers</Legend>
      <Text>Decide if people buy tickets from you or from scalpers.</Text>
      <RadioGroup name="resale" defaultValue="permit">
        <RadioField>
          <Radio value="permit" />
          <Label>Allow tickets to be resold</Label>
          <Description>Customers can resell or transfer their tickets if they can’t make it to the event.</Description>
        </RadioField>
        <RadioField>
          <Radio value="forbid" />
          <Label>Don’t allow tickets to be resold</Label>
          <Description>Tickets cannot be resold or transferred to another person.</Description>
        </RadioField>
      </RadioGroup>
    </Fieldset>
  )
}