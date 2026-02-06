import {
  BookOpen,
  Brain,
  FileText,
  FolderOpen,
  GraduationCap,
  Heart,
  Microscope,
  Pill,
  Stethoscope,
  TestTubes,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: BookOpen },
  { title: "Transcrição & IA", url: "/ia", icon: Brain },
  { title: "Flashcards", url: "/flashcards", icon: GraduationCap },
  { title: "Simulados", url: "/simulados", icon: FileText },
  { title: "Arquivos", url: "/arquivos", icon: FolderOpen },
];

const disciplines = [
  { title: "Anatomia", icon: Heart },
  { title: "Fisiologia", icon: Stethoscope },
  { title: "Histologia", icon: Microscope },
  { title: "Bioquímica", icon: TestTubes },
  { title: "Farmacologia", icon: Pill },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Stethoscope className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-sidebar-foreground">
              MegaMed
            </h1>
            <p className="text-xs text-sidebar-foreground/60">
              Plataforma de Estudos
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider">
            Disciplinas
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {disciplines.map((disc) => (
                <SidebarMenuItem key={disc.title}>
                  <SidebarMenuButton className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground cursor-pointer">
                    <disc.icon className="h-4 w-4" />
                    <span className="text-sm">{disc.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="rounded-xl bg-sidebar-accent p-4">
          <p className="text-xs font-medium text-sidebar-foreground/80">
            📚 Dica do dia
          </p>
          <p className="mt-1 text-xs text-sidebar-foreground/50">
            Use flashcards com repetição espaçada para melhor retenção!
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
