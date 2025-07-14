import { Subheading } from "../heading";
import Avatar from "./Avatar";

const USERS = [
    { avatarUrl: "https://i.pravatar.cc/150?img=1" },
    { avatarUrl: "https://i.pravatar.cc/150?img=2" },
    { avatarUrl: "https://i.pravatar.cc/150?img=3" },
    { avatarUrl: "https://i.pravatar.cc/150?img=4" },
];

export default function ExampleAvatar({
    user = USERS[0],
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
            <div className="flex items-end gap-8">
                <Avatar className="size-6" src={user.avatarUrl} />
                <Avatar className="size-8" src={user.avatarUrl} />
                <Avatar className="size-10" src={user.avatarUrl} />
            </div>

            <Subheading>With initials</Subheading>
            <div className="flex items-end gap-8">
                <Avatar initials="tw" className="size-6 bg-zinc-900 text-white dark:bg-white dark:text-black" />
                <Avatar initials="tw" className="size-8 bg-zinc-900 text-white dark:bg-white dark:text-black" />
                <Avatar initials="tw" className="size-10 bg-zinc-900 text-white dark:bg-white dark:text-black" />
            </div>

            <Subheading>Avatar groups</Subheading>
            <div className="flex items-center justify-center -space-x-2">
                {users.map((user) => (
                    <Avatar key={user.avatarUrl} src={user.avatarUrl} className="size-8 ring-2 ring-white dark:ring-zinc-900" />
                ))}
            </div>
        </>
    )
}