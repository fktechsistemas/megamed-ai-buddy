import { BookOpen, Brain, GraduationCap, FolderOpen, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const bottomNavItems = [
  { title: "Dashboard", url: "/", icon: BookOpen },
  { title: "IA", url: "/ia", icon: Brain },
  { title: "Flashcards", url: "/flashcards", icon: GraduationCap },
  { title: "Arquivos", url: "/arquivos", icon: FolderOpen },
  { title: "Perfil", url: "/perfil", icon: User },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end={item.url === "/"}
            className="flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-muted-foreground transition-colors"
            activeClassName="text-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
