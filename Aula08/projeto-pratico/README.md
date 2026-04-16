# Relatório de Desenvolvimento: Suite de Ferramentas Neo-Brutalistas
**Disciplina:** Programação Web
**Desenvolvedor:** Lucas
**Tecnologias:** React, Vite, Tailwind CSS, Framer Motion, Axios

---

## 1. Visão Geral do Projeto
Este projeto consiste em uma Single Page Application (SPA) que reúne ferramentas utilitárias e jogos, utilizando uma estética **Neobrutalista**. O foco foi aplicar conceitos avançados de UI/UX, manipulação de estados complexos e consumo de APIs externas.

### Links Oficiais
- **Deploy (Vercel):** [https://aula-programacao-web-7hgd.vercel.app/](https://aula-programacao-web-7hgd.vercel.app/)
---

## 2. Etapas de Desenvolvimento

### Etapa 1: Arquitetura e UI System
Definição da identidade visual baseada em bordas espessas, cores vibrantes (Neo-Yellow, Neo-Blue, Neo-Green) e sombras rígidas. Criação do componente reutilizável `NeoCard` para manter a consistência visual em toda a aplicação.

### Etapa 2: Implementação do Buscador de CEP
Desenvolvimento de uma ferramenta de localização integrada à API **ViaCEP**.
- **Diferenciais Técnicos:** Implementação de máscara de input automática e auto-busca ao atingir 8 dígitos utilizando o hook `useCallback` para otimização de performance.
- **Feedback Visual:** Animações de erro (shake) e loading states com Framer Motion.

> ![Print da tela do Buscador de CEP] - [ADICIONE O PRINT AQUI]

### Etapa 3: Calculadora Avançada
Construção de uma calculadora funcional com suporte a operações aritméticas e histórico.
- **Diferenciais Técnicos:** Suporte total a eventos de teclado (Keydown Event Listeners), permitindo o uso do teclado numérico. Tratamento de precisão decimal para evitar erros nativos do JavaScript.
- **Estética:** Efeito visual de *Scanlines* no display para simular monitores CRT antigos.

> ![Print da tela da Calculadora] - [ADICIONE O PRINT AQUI]

### Etapa 4: Jogo da Velha (Game Design)
Implementação de um motor de jogo para o clássico Jogo da Velha.
- **Diferenciais Técnicos:** Algoritmo de verificação de vitória dinâmico que destaca visualmente a linha vencedora e gerencia estados de empate.
- **UX:** Uso de `AnimatePresence` para transições suaves de entrada dos símbolos 'X' e 'O'.

> ![Print da tela do Jogo da Velha] - [ADICIONE O PRINT AQUI]

---

## 3. Desafios e Soluções (Build & Deploy)
Durante o processo de deploy na Vercel, foram corrigidos avisos de dependências do ESLint através da aplicação de hooks de memorização (`useCallback`). Isso garantiu que as funções de busca e manipulação de eventos fossem estáveis entre as renderizações, cumprindo os critérios rigorosos de Integração Contínua (CI).

---

## 4. Conclusão
A atividade permitiu consolidar conhecimentos em:
1.  **Componentização:** Criação de interfaces modulares.
2.  **Hooks:** Gestão de ciclo de vida com `useEffect` e `useCallback`.
3.  **Consumo de API:** Integração assíncrona com serviços externos.
4.  **Acessibilidade:** Implementação de atalhos de teclado.
