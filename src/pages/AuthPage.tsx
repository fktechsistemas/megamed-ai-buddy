import { Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-accent p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
            <Stethoscope className="h-7 w-7 text-primary-foreground" />
          </div>
          <CardTitle className="font-display text-2xl">
            {isLogin ? "Entrar no MegaMed" : "Criar Conta"}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {isLogin
              ? "Acesse sua plataforma de estudos"
              : "Comece sua jornada de estudos"}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" placeholder="Seu nome" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full" size="lg">
            {isLogin ? "Entrar" : "Criar Conta"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {isLogin ? "Não tem conta?" : "Já tem conta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-primary hover:underline"
            >
              {isLogin ? "Cadastre-se" : "Faça login"}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
