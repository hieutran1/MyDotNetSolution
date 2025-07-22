import Fieldset from "components/fieldset/Fieldset";
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/checkbox";
import Legend from "components/fieldset/Legend";
import Label from "components/fieldset/Label";
import Text from "components/text/Text";
import Description from "components/fieldset/Description";
import DemoComponent from "../DemoComponent";
import { useState } from "react";
import Table from "../table/Table";
import TableHead from "../table/TableHead";
import TableBody from "../table/TableBody";
import TableHeader from "../table/TableHeader";
import TableRow from "../table/TableRow";
import { SOLID_COLOR_20 } from "test-data";
import TableCell from "../table/TableCell";

const options = ['Show on events page', 'Allow embedding'];

export default function ExampleCheckbox() {
  let [selected, setSelected] = useState(['Show on events page']);

  return (
    <>
      <DemoComponent heading="Indeterminate state">
        <CheckboxGroup role="group" aria-label="Discoverability">
          <CheckboxField>
            <Checkbox
              checked={selected.length > 0}
              indeterminate={selected.length !== options.length}
              onChange={(checked) => setSelected(checked ? options : [])}
            />
            <Label>Select all</Label>
          </CheckboxField>

          {options.map((option) => (
            <CheckboxField key={option}>
              <Checkbox
                name={option}
                checked={selected.includes(option)}
                onChange={(checked) => {
                  return setSelected((pending) => {
                    return checked ? [...pending, option] : pending.filter((item) => item !== option)
                  })
                }}
              />
              <Label>{option}</Label>
            </CheckboxField>
          ))}
        </CheckboxGroup>
      </DemoComponent>

      <DemoComponent heading="With fieldset">
        <Fieldset>
          <Legend>Discoverability</Legend>
          <Text>Decide where your events can be found across the web.</Text>
          <CheckboxGroup>
            <CheckboxField>
              <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
              <Label>Show on events page</Label>
              <Description>Make this event visible on your profile.</Description>
            </CheckboxField>
            <CheckboxField>
              <Checkbox name="discoverability" value="allow_embedding" />
              <Label>Allow embedding</Label>
              <Description>Allow others to embed your event details on their own site.</Description>
            </CheckboxField>
          </CheckboxGroup>
        </Fieldset>
      </DemoComponent>

      <DemoComponent heading="Disabled state">
        <Fieldset>
          <Legend>Discoverability</Legend>
          <Text>Decide where your events can be found across the web.</Text>
          <CheckboxGroup>
            <CheckboxField>
              <Checkbox name="discoverability" value="show_on_events_page" />
              <Label>Show on events page</Label>
              <Description>Make this event visible on your profile.</Description>
            </CheckboxField>
            <CheckboxField disabled>
              <Checkbox name="discoverability" value="allow_embedding" />
              <Label>Allow embedding</Label>
              <Description>Allow others to embed your event details on their own site.</Description>
            </CheckboxField>
          </CheckboxGroup>
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
                  <Checkbox color={colorRef} defaultChecked/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoComponent>
    </>
  )
}
