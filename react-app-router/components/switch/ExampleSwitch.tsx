import Description from "components/fieldset/Description";
import Label from "components/fieldset/Label";
import SwitchField from "./SwitchField";
import Switch from "./Switch";
import SwitchGroup from "./SwitchGroup";

export default function ExampleSwitch() {
    return (
        <>
            <Label>Switch Example</Label>
            <SwitchField>
                <Label>Allow embedding</Label>
                <Description>Allow others to embed your event details on their own site.</Description>
                <Switch name="allow_embedding" defaultChecked />
            </SwitchField>

            <Label>Multiple switches</Label>
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
        </>
    )
}