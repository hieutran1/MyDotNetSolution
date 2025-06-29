import type { Navbar } from "@/components/navbar";
import type { Sidebar } from "@/components/sidebar";
import type React from "react";

export default function SidebarLayout({
    sidebar,
    navbar,
    children,
}: {
    sidebar: React.ReactElement<typeof Sidebar>;
    navbar: React.ReactElement<typeof Navbar>;
    children?: React.ReactNode;
}) {
    return (
        <div className="sidebar-layout">
            <aside className="sidebar">{sidebar}</aside>
            <main className="content">{children}</main>
        </div>
    );
}