import Label from "components/fieldset/Label";
import Badge from "./Badge";
import BadgeButton from "./BadgeButton";

export default function ExampleBadge() {
    return (
        <>
            <Label>Badge colors</Label>
            <div className="flex gap-3">
                <Badge color="lime">documentation</Badge>
                <Badge color="purple">help wanted</Badge>
                <Badge color="rose">bug</Badge>
            </div>

            <Label>Using as buttons</Label>
            <BadgeButton>documentation</BadgeButton>

            <Label>Using as links</Label>
            <BadgeButton href="#">documentation</BadgeButton>
        </>
    )
}