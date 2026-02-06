import { Brain, Upload, FileText, Volume2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const IAPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Transcrição & IA</h1>
        <p className="mt-1 text-muted-foreground">
          Transcreva aulas, gere resumos e anotações com inteligência artificial.
        </p>
      </div>

      {/* Upload de Áudio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display text-base">
            <Upload className="h-5 w-5 text-primary" />
            Upload de Áudio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-accent/50 p-8 transition-colors hover:border-primary/50">
            <Upload className="mb-3 h-10 w-10 text-primary/50" />
            <p className="text-center text-sm font-medium">
              Arraste um arquivo de áudio aqui
            </p>
            <p className="mt-1 text-center text-xs text-muted-foreground">
              MP3, WAV, M4A — máx. 50MB
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Selecionar Arquivo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Texto para Resumo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display text-base">
            <Sparkles className="h-5 w-5 text-primary" />
            Gerar Resumo com IA
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Cole ou digite o texto da aula aqui..."
            className="min-h-[150px] resize-none"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleProcess} disabled={!inputText}>
              <FileText className="mr-2 h-4 w-4" />
              Resumo em Tópicos
            </Button>
            <Button variant="outline" onClick={handleProcess} disabled={!inputText}>
              <Brain className="mr-2 h-4 w-4" />
              Anotações de Bloco
            </Button>
            <Button variant="outline" onClick={handleProcess} disabled={!inputText}>
              <Volume2 className="mr-2 h-4 w-4" />
              Texto para Áudio
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Loading / Result */}
      {isProcessing && (
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-base">Processando...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IAPage;
