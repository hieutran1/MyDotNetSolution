import Label from "components/fieldset/Label";
import Badge from "./Badge";
import BadgeButton from "./BadgeButton";
import { Subheading } from "../heading";

export default function ExampleBadge() {
    return (
        <>
            <Subheading>Badge colors</Subheading>
            <div className="flex gap-3">
                <Badge color="lime">documentation</Badge>
                <Badge color="purple">help wanted</Badge>
                <Badge color="rose">bug</Badge>
            </div>

            <Subheading>Using as buttons</Subheading>
            <BadgeButton>documentation</BadgeButton>

            <Subheading>Using as links</Subheading>
            <BadgeButton href="#">documentation</BadgeButton>
        </>
    )
}