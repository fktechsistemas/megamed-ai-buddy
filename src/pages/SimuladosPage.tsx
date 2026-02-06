import { FileText, CheckCircle, XCircle, Clock, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const mockQuizzes = [
  { title: "Anatomia - Sistema Nervoso", questions: 20, score: 85, date: "Hoje" },
  { title: "Farmacologia - Antibióticos", questions: 15, score: 70, date: "Ontem" },
  { title: "Fisiologia - Cardíaca", questions: 25, score: 92, date: "3 dias atrás" },
];

const SimuladosPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Simulados</h1>
          <p className="mt-1 text-muted-foreground">
            Teste seus conhecimentos com questões geradas por IA.
          </p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Novo Simulado
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
        {[
          { label: "Simulados", value: "12", icon: FileText },
          { label: "Questões", value: "284", icon: CheckCircle },
          { label: "Média", value: "78%", icon: Trophy },
          { label: "Tempo Médio", value: "18min", icon: Clock },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4 text-center">
              <stat.icon className="mx-auto h-5 w-5 text-muted-foreground" />
              <p className="mt-2 font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quiz History */}
      <div>
        <h2 className="mb-3 font-display text-lg font-semibold">Histórico</h2>
        <div className="space-y-3">
          {mockQuizzes.map((quiz, i) => (
            <Card key={i} className="cursor-pointer transition-all hover:shadow-md">
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {quiz.questions} questões · {quiz.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-display text-xl font-bold ${quiz.score >= 80 ? "text-success" : quiz.score >= 60 ? "text-warning" : "text-destructive"}`}>
                    {quiz.score}%
                  </p>
                  <Progress value={quiz.score} className="mt-1 h-1.5 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimuladosPage;
