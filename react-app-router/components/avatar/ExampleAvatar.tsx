import Label from "components/fieldset/Label";
import { Avatar } from "./Avatar";
import { Subheading } from "../heading";

const USERS = [
    { avatarUrl: "https://i.pravatar.cc/150?img=1" },
    { avatarUrl: "https://i.pravatar.cc/150?img=2" },
    { avatarUrl: "https://i.pravatar.cc/150?img=3" },
    { avatarUrl: "https://i.pravatar.cc/150?img=4" },
];

export default function AvatarExample({
    user,
    users = USERS
}: {
    user: {
        avatarUrl: string;
    },
    users?: {
        avatarUrl: string;
    }[];
}) {
    return (
        <>
            <Subheading>Basic</Subheading>
            <Avatar className="size-6" src={user.avatarUrl} />
            <Avatar className="size-8" src={user.avatarUrl} />
            <Avatar className="size-10" src={user.avatarUrl} />

            <Subheading>With initials</Subheading>
            <Avatar initials="tw" className="size-6 bg-zinc-900 text-white dark:bg-white dark:text-black" />
            <Avatar initials="tw" className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black" />
            <Avatar initials="tw" className="size-10 bg-zinc-900 text-white dark:bg-white dark:text-black" />

            <Subheading>Avatar groups</Subheading>
            <div className="flex items-center justify-center -space-x-2">
                {users.map((user) => (
                    <Avatar src={user.avatarUrl} className="size-8 ring-2 ring-white dark:ring-zinc-900" />
                ))}
            </div>
        </>
    )
}