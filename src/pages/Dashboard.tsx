import {
  Brain,
  GraduationCap,
  FolderOpen,
  TrendingUp,
  Clock,
  Flame,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const quickActions = [
  {
    title: "Transcrição & IA",
    description: "Transcreva aulas e gere resumos",
    icon: Brain,
    url: "/ia",
    gradient: "from-primary to-medical-blue-dark",
  },
  {
    title: "Flashcards",
    description: "Estude com repetição espaçada",
    icon: GraduationCap,
    url: "/flashcards",
    gradient: "from-success to-emerald-700",
  },
  {
    title: "Arquivos",
    description: "Organize seus materiais",
    icon: FolderOpen,
    url: "/arquivos",
    gradient: "from-warning to-amber-700",
  },
];

const recentActivity = [
  { title: "Resumo de Anatomia - Sistema Nervoso", time: "2h atrás", type: "resumo" },
  { title: "Flashcards de Farmacologia", time: "5h atrás", type: "flashcard" },
  { title: "Transcrição Aula de Fisiologia", time: "1 dia atrás", type: "transcricao" },
  { title: "Simulado de Bioquímica", time: "2 dias atrás", type: "simulado" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="border-0 bg-gradient-to-br from-primary to-medical-blue-dark text-primary-foreground shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold">
                Olá, Estudante! 👋
              </h1>
              <p className="mt-1 text-primary-foreground/80">
                Continue seus estudos de onde parou.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-warning" />
                  <span className="text-sm font-medium">5 dias seguidos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">2h hoje</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <TrendingUp className="h-16 w-16 text-primary-foreground/20" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Progress */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-base">Progresso do Dia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Meta diária</span>
              <span className="font-medium">3/5 atividades</span>
            </div>
            <Progress value={60} className="h-2" />
            <div className="flex gap-2">
              {["Anatomia", "Fisiologia", "Farmacologia"].map((disc) => (
                <span
                  key={disc}
                  className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                >
                  {disc}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-3 font-display text-lg font-semibold">Acesso Rápido</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.url}>
              <Card className="group cursor-pointer border-0 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <CardContent className="p-5">
                  <div
                    className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${action.gradient}`}
                  >
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold">{action.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="font-display text-base">Atividade Recente</CardTitle>
          <Button variant="ghost" size="sm" className="text-primary">
            Ver tudo <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                    {activity.type === "resumo" && <Brain className="h-4 w-4 text-primary" />}
                    {activity.type === "flashcard" && <GraduationCap className="h-4 w-4 text-success" />}
                    {activity.type === "transcricao" && <Brain className="h-4 w-4 text-primary" />}
                    {activity.type === "simulado" && <GraduationCap className="h-4 w-4 text-warning" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
