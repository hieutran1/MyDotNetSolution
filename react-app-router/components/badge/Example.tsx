import Badge from "./Badge";

export default function Example() {
    return (
        <div className="flex gap-3">
            <Badge color="lime">documentation</Badge>
            <Badge color="purple">help wanted</Badge>
            <Badge color="rose">bug</Badge>
        </div>
    )
}