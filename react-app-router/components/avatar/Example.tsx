import Avatar from "./Avatar";

export default function Example({
    user
}: {
    user: {
        avatarUrl: string;
    }
}) {
    return (
        <>
            <Avatar className="size-6" src={user.avatarUrl} />
            <Avatar className="size-8" src={user.avatarUrl} />
            <Avatar className="size-10" src={user.avatarUrl} />
        </>
    )
}