import type { Navbar } from "@/components/navbar";
import type { Sidebar } from "@/components/sidebar";

export default function StackedLayout({
    navbar,
    sidebar,
    children,
}: {
    navbar: React.ReactElement<typeof Navbar>;
    sidebar?: React.ReactElement<typeof Sidebar>;
    children?: React.ReactNode;
}) {
    return (
        <div className="stacked-layout">
            <header className="navbar">{navbar}</header>
            <main className="content">{children}</main>
        </div>
    );
}