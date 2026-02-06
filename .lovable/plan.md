

# MegaMed - Plataforma de Estudos com IA para Medicina

## Visão Geral
Web app de produtividade acadêmica para estudantes de Medicina e Ciências Biológicas no Paraguai, com interface em Português (Brasil), design clean médico e foco em ferramentas de IA.

## Identidade Visual
- **Paleta**: Azul medicinal (#1E40AF → #3B82F6), branco, cinza suave
- **Estilo**: Clean Tech, cards arredondados, tipografia clara
- **Ícones**: Lucide React
- **Componentes**: Shadcn/UI

## Estrutura de Navegação
- **Desktop**: Sidebar lateral com seletor de disciplinas (Anatomia, Fisiologia, Histologia, Bioquímica, Farmacologia, etc.)
- **Mobile**: Bottom navigation bar com ícones para Dashboard, IA, Flashcards, Arquivos, Perfil
- **Layout Mobile-First**

## Páginas e Funcionalidades

### 1. Autenticação
- Tela de Login/Cadastro com email e senha
- Design limpo com branding MegaMed
- Integração com Supabase Auth

### 2. Dashboard Principal
- Card de boas-vindas com nome do aluno
- Resumo de atividades recentes (últimos resumos, flashcards estudados)
- Barra de progresso de estudos do dia
- Acesso rápido às 3 ferramentas principais: Transcrição IA, Resumos, Flashcards
- Widget de disciplinas favoritas

### 3. Módulo de Transcrição e IA
- **Upload de Áudio**: Área de drag-and-drop para arquivos de áudio de aulas
- **Resumos em Tópicos**: Botão para gerar resumos automáticos de textos longos
- **Anotações de Bloco**: Geração de anotações estruturadas
- **Texto para Áudio**: Converter resumos em áudio para ouvir
- Estados de loading com skeletons durante processamento
- Integração com Lovable AI para processamento de texto

### 4. Flashcards
- Criação manual de flashcards por disciplina
- Geração automática de flashcards via IA a partir de textos/PDFs
- Sistema de repetição espaçada (algoritmo SM-2)
- Interface de estudo com flip de card
- Estatísticas de acerto/erro por disciplina

### 5. Questionários/Simulados
- Gerador de questões baseado em conteúdo do usuário
- Questões de múltipla escolha geradas por IA
- Resultados com explicações
- Histórico de simulados

### 6. Repositório de Arquivos
- Organização por disciplinas em pastas
- Upload de PDFs e documentos
- Visualização e busca de arquivos
- Integração com Supabase Storage

### 7. Perfil do Usuário
- Nome, universidade, curso/semestre
- Estatísticas gerais de estudo
- Configurações da conta

## Backend (Supabase Externo)
- **Auth**: Login com email/senha
- **Database**: Tabelas para perfis, flashcards, documentos, progresso
- **Storage**: Bucket para uploads de áudio e PDFs
- **Edge Functions**: Integração com Lovable AI para IA

## Ordem de Implementação
1. Layout completo (sidebar, bottom bar, todas as páginas visuais)
2. Autenticação e perfis de usuário
3. Dashboard com dados mock
4. Repositório de arquivos com Supabase Storage
5. Sistema de Flashcards com banco de dados
6. Integração com IA (resumos, transcrição, geração de flashcards)
7. Questionários e simulados

