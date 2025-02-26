"use client";

import Cookies from "js-cookie";
import { AppSidebar } from "@/components/dashboard-layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Header } from "@/components/dashboard-layout/header";
import { ThemeSwitch } from "@/components/theme-switch";
import { ProfileDropdown } from "@/components/dashboard-layout/profile-dropdown";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultOpen = Cookies.get("sidebar:state") !== "false";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />

      <div
        id="content"
        className={cn(
          "ml-auto w-full max-w-full",
          "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
          "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
          "transition-[width] duration-200 ease-linear",
          "flex h-svh flex-col",
          "group-data-[scroll-locked=1]/body:h-full",
          "group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh"
        )}
      >
        <Header fixed>
          {/* <Search /> */}
          <div className="ml-auto flex items-center space-x-4">
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </Header>
        {children}
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
