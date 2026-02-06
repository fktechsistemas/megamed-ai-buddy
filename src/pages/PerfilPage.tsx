import { User, GraduationCap, BarChart3, Settings, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PerfilPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Perfil</h1>

      {/* Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold">Estudante MegaMed</h2>
              <p className="text-sm text-muted-foreground">estudante@email.com</p>
              <p className="mt-1 text-sm text-muted-foreground">
                <GraduationCap className="mr-1 inline h-4 w-4" />
                Medicina · 4º Semestre · UPE
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display text-base">
            <BarChart3 className="h-5 w-5 text-primary" />
            Estatísticas Gerais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Horas Estudadas", value: "128h" },
              { label: "Flashcards Revisados", value: "1.240" },
              { label: "Simulados Feitos", value: "32" },
              { label: "Resumos Gerados", value: "56" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg bg-muted p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Card>
        <CardContent className="p-0">
          {[
            { label: "Configurações da Conta", icon: Settings },
            { label: "Sair", icon: LogOut, destructive: true },
          ].map((item, i) => (
            <div key={item.label}>
              {i > 0 && <Separator />}
              <button
                className={`flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-muted/50 ${
                  item.destructive ? "text-destructive" : ""
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PerfilPage;
