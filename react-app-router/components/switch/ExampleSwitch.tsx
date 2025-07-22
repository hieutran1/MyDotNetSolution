import Description from "components/fieldset/Description";
import Label from "components/fieldset/Label";
import SwitchField from "./SwitchField";
import Switch from "./Switch";
import SwitchGroup from "./SwitchGroup";
import DemoComponent from "../DemoComponent";
import { Fieldset, Legend } from "../fieldset";
import { Text } from "../text";
import * as Headless from "@headlessui/react";
import { useState } from "react";
import { SOLID_COLOR_20 } from "test-data";
import Table from "../table/Table";
import TableHead from "../table/TableHead";
import TableHeader from "../table/TableHeader";
import TableRow from "../table/TableRow";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import { col } from "framer-motion/client";

export default function ExampleSwitch() {
    let [checked, setChecked] = useState(true);

    return (
        <>
            <DemoComponent heading="Basic">
                <form>
                    <SwitchField>
                        <Label>Allow embedding</Label>
                        <Description>Allow others to embed your event details on their own site.</Description>
                        <Switch name="allow_embedding" defaultChecked />
                    </SwitchField>
                </form>

            </DemoComponent>

            <DemoComponent heading="With custom layout">
                <Headless.Field className="flex items-center gap-4">
                    <Switch name="allow_embedding" />
                    <Label>Allow embedding</Label>
                </Headless.Field>
            </DemoComponent>

            <DemoComponent heading="With accent color">
                <Switch color="sky" defaultChecked />
            </DemoComponent>

            <DemoComponent heading="With custom value">
                <Switch name="embed" value="allow" />
            </DemoComponent>

            <DemoComponent heading="Controlled component">
                <Switch checked={checked} onChange={setChecked} />
            </DemoComponent>

            <DemoComponent heading="Multiple switches">
                <SwitchGroup>
                    <SwitchField>
                        <Label>Show on events page</Label>
                        <Description>Make this event visible on your profile.</Description>
                        <Switch name="show_on_events_page" defaultChecked />
                    </SwitchField>
                    <SwitchField>
                        <Label>Allow embedding</Label>
                        <Description>Allow others to embed your event details on their own site.</Description>
                        <Switch name="allow_embedding" />
                    </SwitchField>
                </SwitchGroup>
            </DemoComponent>

            <DemoComponent heading="With fieldset">
                <Fieldset>
                    <Legend>Discoverability</Legend>
                    <Text>Decide where your events can be found across the web.</Text>
                    <SwitchGroup>
                        <SwitchField>
                            <Label>Show on events page</Label>
                            <Description>Make this event visible on your profile.</Description>
                            <Switch name="show_on_events_page" defaultChecked />
                        </SwitchField>
                        <SwitchField>
                            <Label>Allow embedding</Label>
                            <Description>Allow others to embed your event details on their own site.</Description>
                            <Switch name="allow_embedding" />
                        </SwitchField>
                    </SwitchGroup>
                </Fieldset>
            </DemoComponent>

            <DemoComponent heading="Disabled state">
                <Fieldset>
                    <Legend>Discoverability</Legend>
                    <Text>Decide where your events can be found across the web.</Text>
                    <SwitchGroup>
                        <SwitchField>
                            <Label>Show on events page</Label>
                            <Description>Make this event visible on your profile.</Description>
                            <Switch name="discoverability" value="show_on_events_page" />
                        </SwitchField>
                        <SwitchField disabled>
                            <Label>Allow embedding</Label>
                            <Description>Allow others to embed your event details on their own site.</Description>
                            <Switch name="discoverability" value="allow_embedding" />
                        </SwitchField>
                    </SwitchGroup>
                </Fieldset>
            </DemoComponent>

            <DemoComponent heading="Color reference">

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Color</TableHeader>
                            <TableHeader>Switch</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {SOLID_COLOR_20.map((color) => (
                            <TableRow>
                                <TableCell>{color}</TableCell>
                                <TableCell>
                                    <Switch color={color} defaultChecked/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </DemoComponent>
        </>
    )
}