import {
  FolderOpen,
  Upload,
  Search,
  FileText,
  File,
  MoreVertical,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const folders = [
  { name: "Anatomia", files: 12, color: "bg-primary" },
  { name: "Fisiologia", files: 8, color: "bg-success" },
  { name: "Histologia", files: 5, color: "bg-warning" },
  { name: "Bioquímica", files: 15, color: "bg-destructive" },
  { name: "Farmacologia", files: 9, color: "bg-primary" },
];

const recentFiles = [
  { name: "Aula 12 - Sistema Nervoso.pdf", folder: "Anatomia", size: "2.4 MB", date: "Hoje" },
  { name: "Resumo Antibióticos.pdf", folder: "Farmacologia", size: "1.1 MB", date: "Ontem" },
  { name: "Slides Cardíaca.pptx", folder: "Fisiologia", size: "5.8 MB", date: "3 dias" },
  { name: "Notas - Tecidos.docx", folder: "Histologia", size: "340 KB", date: "1 semana" },
];

const ArquivosPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Arquivos</h1>
          <p className="mt-1 text-muted-foreground">
            Organize seus materiais por disciplina.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar arquivos..." className="pl-10" />
      </div>

      {/* Folders */}
      <div>
        <h2 className="mb-3 font-display text-lg font-semibold">Disciplinas</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {folders.map((folder) => (
            <Card key={folder.name} className="cursor-pointer transition-all hover:shadow-md">
              <CardContent className="p-4 text-center">
                <div className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl ${folder.color}/10`}>
                  <FolderOpen className={`h-6 w-6 text-${folder.color === "bg-primary" ? "primary" : folder.color === "bg-success" ? "success" : folder.color === "bg-warning" ? "warning" : "destructive"}`} />
                </div>
                <p className="text-sm font-medium">{folder.name}</p>
                <p className="text-xs text-muted-foreground">{folder.files} arquivos</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Files */}
      <div>
        <h2 className="mb-3 font-display text-lg font-semibold">Arquivos Recentes</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentFiles.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      {file.name.endsWith(".pdf") ? (
                        <FileText className="h-5 w-5 text-destructive" />
                      ) : (
                        <File className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {file.folder} · {file.size} · {file.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArquivosPage;
