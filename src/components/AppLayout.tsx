import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BottomNav } from "@/components/BottomNav";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <div className="hidden md:block">
          <AppSidebar />
        </div>

        <main className="flex-1 pb-20 md:pb-0">
          <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-lg md:h-16 md:px-6">
            <SidebarTrigger className="hidden md:flex">
              <Menu className="h-5 w-5" />
            </SidebarTrigger>
            <div className="flex items-center gap-2 md:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">M</span>
              </div>
              <span className="font-display text-lg font-bold">MegaMed</span>
            </div>
          </header>

          <div className="p-4 md:p-6">
            <Outlet />
          </div>
        </main>

        <BottomNav />
      </div>
    </SidebarProvider>
  );
}
