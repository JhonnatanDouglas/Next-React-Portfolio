import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import BackgroundAnimated from "@/components/structures/backgroundAnimated";
import HeaderDefault from "@/components/structures/header";
import Footer from "@/components/structures/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio | JhonnatanDev",
  description:
    "Olá, meu nome é Jhonnatan Douglas e sou um Desenvolvedor FullStack! Confira meu portfólio com meus projetos mais recentes e habilidades desenvolvidas.",
  creator: "Jhonnatan Douglas Ferreira Araujo",
  keywords:
    "Desenvolvedor FullStack, Portfólio de Desenvolvedor, Projetos Web, Desenvolvimento Web, HTML, CSS, JavaScript, React, Next.js, TypeScript, Python, Node.js, Express.js, PostgreSQL, Django, Git, GitHub, Vite, LinkedIn, Contato, Habilidades de Desenvolvedor, Portfolio, Frontend, Backend, Fullstack, Desenvolvimento de Software, Desenvolvimento de Aplicativos, Desenvolvimento de Sites, Programação Web, Programação de Computadores, Desenvolvedor de Software, Desenvolvimento de Sistemas, Tecnologia da Informação, Desenvolvimento Ágil, Metodologia Scrum, Experiência do Usuário, UX/UI, Arquitetura de Software, Segurança da Informação, Cloud Computing, SEO, Otimização para Motores de Busca, Marketing Digital, Freelancer, Trabalho Remoto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Providers>
        <body
          id="body"
          className={inter.className}
        >
          <HeaderDefault />
          {children}
          <BackgroundAnimated />
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
