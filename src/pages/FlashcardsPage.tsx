import { GraduationCap, Plus, Brain, BarChart3, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const mockDecks = [
  { name: "Anatomia - Sistema Nervoso", cards: 45, mastered: 30, color: "bg-primary" },
  { name: "Farmacologia - Antibióticos", cards: 32, mastered: 18, color: "bg-success" },
  { name: "Fisiologia - Sistema Cardíaco", cards: 28, mastered: 22, color: "bg-warning" },
  { name: "Histologia - Tecidos Epiteliais", cards: 20, mastered: 8, color: "bg-destructive" },
];

const FlashcardsPage = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Flashcards</h1>
          <p className="mt-1 text-muted-foreground">
            Estude com repetição espaçada para máxima retenção.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Brain className="mr-2 h-4 w-4" />
            Gerar com IA
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Novo Deck
          </Button>
        </div>
      </div>

      {/* Study Card Preview */}
      <Card
        className="cursor-pointer border-2 border-primary/20 transition-all hover:shadow-lg"
        onClick={() => setFlipped(!flipped)}
      >
        <CardContent className="flex min-h-[200px] items-center justify-center p-8">
          {!flipped ? (
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Pergunta
              </p>
              <p className="mt-4 font-display text-xl font-semibold">
                Qual é a função principal do cerebelo?
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Toque para ver a resposta
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                Resposta
              </p>
              <p className="mt-4 text-lg">
                Coordenação motora, equilíbrio e postura. Recebe aferências do córtex motor, medula espinhal e sistema vestibular.
              </p>
              <div className="mt-6 flex justify-center gap-2">
                <Button size="sm" variant="outline" className="text-destructive">
                  Errei
                </Button>
                <Button size="sm" variant="outline" className="text-warning">
                  Difícil
                </Button>
                <Button size="sm" className="bg-success text-white hover:bg-success/90">
                  Acertei
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
        {[
          { label: "Total", value: "125", icon: GraduationCap },
          { label: "Para Revisar", value: "18", icon: RotateCcw },
          { label: "Dominados", value: "78", icon: BarChart3 },
          { label: "Taxa Acerto", value: "72%", icon: BarChart3 },
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

      {/* Decks */}
      <div>
        <h2 className="mb-3 font-display text-lg font-semibold">Seus Decks</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {mockDecks.map((deck) => (
            <Card key={deck.name} className="cursor-pointer transition-all hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className={`h-3 w-3 mt-1.5 rounded-full ${deck.color}`} />
                  <div className="flex-1">
                    <h3 className="font-medium">{deck.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {deck.mastered}/{deck.cards} dominados
                    </p>
                    <Progress
                      value={(deck.mastered / deck.cards) * 100}
                      className="mt-2 h-1.5"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashcardsPage;
