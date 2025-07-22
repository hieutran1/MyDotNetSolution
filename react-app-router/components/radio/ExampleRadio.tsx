import Description from "components/fieldset/Description";
import Fieldset from "components/fieldset/Fieldset";
import Label from "components/fieldset/Label";
import Legend from "components/fieldset/Legend";
import Text from "components/text/Text";
import RadioGroup from "./RadioGroup";
import RadioField from "./RadioField";
import Radio from "./Radio";
import DemoComponent from "../DemoComponent";
import * as Headless from "@headlessui/react";
import { useState } from "react";
import Table from "../table/Table";
import TableHead from "../table/TableHead";
import TableRow from "../table/TableRow";
import TableHeader from "../table/TableHeader";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import { SOLID_COLOR_20 } from "test-data";
import Divider from "../divider/Divider";

export default function ExampleRadio() {

  let [selected, setSelected] = useState('permit');

  return (
    <>
      <DemoComponent heading="Basic & default selected state">
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
      </DemoComponent>

      <DemoComponent heading="With custom layout">
        <Headless.Fieldset>
          <Headless.Legend className="text-base/6 font-medium sm:text-sm/6">
            How would you rate your experience?
          </Headless.Legend>
          <Headless.RadioGroup name="rating" defaultValue={3} className="mt-4 flex gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Headless.Field key={rating} className="flex items-center gap-2">
                <Radio value={rating} />
                <Headless.Label className="text-base/6 select-none sm:text-sm/6">{rating}</Headless.Label>
              </Headless.Field>
            ))}
          </Headless.RadioGroup>
        </Headless.Fieldset>
      </DemoComponent>

      <DemoComponent heading="Controlled component & With accent color">
        <RadioGroup name="ticket-resolver" value={selected} onChange={setSelected}>
          <RadioField>
            <Radio value="permit" color="sky" />
            <Label>Allow tickets to be resold</Label>
          </RadioField>
          <RadioField >
            <Radio value="forbid" color="sky" />
            <Label>Don’t allow tickets to be resold</Label>
          </RadioField>
        </RadioGroup>
      </DemoComponent>

      <DemoComponent heading="Disabled state">
        <Fieldset>
          <Legend>Resale and transfers</Legend>
          <Text>Decide if people buy tickets from you or from scalpers.</Text>
          <RadioGroup name="resale" defaultValue="permit">
            <RadioField>
              <Radio value="permit" />
              <Label>Allow tickets to be resold</Label>
              <Description>Customers can resell or transfer their tickets if they can’t make it to the event.</Description>
            </RadioField>
            <RadioField disabled>
              <Radio value="forbid" />
              <Label>Don’t allow tickets to be resold</Label>
              <Description>Tickets cannot be resold or transferred to another person.</Description>
            </RadioField>
          </RadioGroup>
          <Divider />
          <RadioGroup disabled name="resale" defaultValue="permit">
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

        <Divider />
        <Fieldset disabled>
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
      </DemoComponent>

      <DemoComponent heading="Color Reference">
        <Table bleed compact>
          <TableHead>
            <TableRow>
              <TableHeader>Color</TableHeader>
              <TableHeader>Example</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {SOLID_COLOR_20.map((colorRef) => (
              <TableRow key={colorRef}>
                <TableCell>{colorRef}</TableCell>
                <TableCell>
                  <RadioGroup name="20-solid-color">
                    <Radio color={colorRef} />
                  </RadioGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoComponent>
    </>
  )
}