# :mag: Stacks Tecnológicas: Amazon, Webmotors e Figma
 
Analisar as stacks tecnológicas de plataformas em uma aula de desenvolvimento web é uma ponte direta entre os conceitos teóricos e a realidade da engenharia de software no mercado. Essa prática vai muito além de apenas listar quais linguagens ou frameworks estão em alta; ela desenvolve a visão arquitetural e o pensamento crítico de quem constrói sistemas.
Primeiro, essa engenharia reversa demonstra na prática que não existe uma "ferramenta perfeita", mas sim a ferramenta certa para o problema certo.
 
## 1. :shopping_cart: Amazon
![Amazon](https://img.shields.io/badge/Amazon-%23FF9900.svg?style=for-the-badge&logo=amazon&logoColor=white)
 
**Perfil:** E-commerce em escala massiva, foco em infraestrutura própria e análise de dados.
 
### Frontend & UI
* **Bibliotecas JavaScript:**
    * Vue.js
    * RxJS (Programação reativa)
    * jQuery 3.6.0
    * SP namespace
    * Javascript Infovis Toolkit (Visualização de dados)
* **Fontes:** Google Font API, Arial, Sans Serif.
* **Meta:** Open Graph (para compartilhamento em redes sociais).
 
### Infraestrutura & Hospedagem
* **Cloud:** Amazon Web Services (AWS) e Google Cloud.
* **CDN (Content Delivery Network):** Amazon CloudFront.
 
### Análise e Monitoramento
* **Analytics:** Snowplow Analytics.
* **Gestão de Audiência:** Adobe Audience Manager.
* **Monitoramento:** Amazon CloudWatch.
 
### Resumo Técnico
O site foca em escalabilidade global e monitoramento, utilizando infraestrutura robusta da própria AWS e CDNs para garantir velocidade. No frontend, utiliza Vue.js e RxJS para gerenciar uma interface complexa e dinâmica, integrada a camadas pesadas de análise de dados e métricas de comportamento.
 
---
 
## 2. :car: Webmotors
![Webmotors](https://img.shields.io/badge/Webmotors-%23E31937.svg?style=for-the-badge)
 
**Perfil:** Portal automotivo com forte foco em marketing/tracking, apresentando infraestrutura sólida mas com componentes de frontend legados.
 
### Frontend (Legado vs Moderno)
* **Framework CSS:** Bootstrap (UI responsiva).
* **Templating:** Handlebars.js.
* **Bibliotecas JS (Sinais de Legado):**
    * jQuery 1.12.3 (Versão antiga, ponto de atenção para segurança/performance).
    * Modernizr 2.6.2 (Legado).
* **Fontes:** Figtree.
 
### Infraestrutura & Assets
* **Servidor Web:** Apache 2.
* **CDN:** jsDelivr (CDN externa).
* **Mídia:** Video.js (Player HTML5 customizado).
 
### Marketing & Analytics
* **Ferramentas:** Adobe Tag Manager, Adobe Analytics (SiteCatalyst), Facebook Pixel.
* **Observação:** Forte carga de scripts de tracking e campanhas, o que exige gerenciamento cuidadoso para não impactar a performance.
 
### Resumo Técnico
O site possui uma estrutura focada em marketing e conversão, utilizando um servidor estável (Apache) e UI responsiva via Bootstrap. A stack é marcada pela convivência entre ferramentas de rastreamento (Adobe/Facebook) e componentes de frontend legados, exigindo atenção à performance.
 
---
 
## 3. :triangular_ruler:  Figma
![Figma](https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
 
**Perfil:** Ferramenta de design baseada na web, com stack moderna focada em alta performance gráfica e renderização dinâmica.
 
### Frontend & Visualização de Dados
* **Framework Principal:** Vue.js (Construção de interfaces dinâmicas e reativas).
* **Gráficos e Renderização:**
    * D3.js (Visualização de dados e renderização dinâmica).
    * dc.js (Gráficos e dashboards interativos, atua com D3).
    * C3.js (Gráficos simplificados baseados em D3).
* **Meta:** Open Graph.
 
### Infraestrutura & Segurança
* **Hospedagem:** Google Cloud (Escalabilidade e performance global).
* **Segurança:** Kount (Camada antifraude).
 
### Resumo Técnico
O site possui uma base moderna utilizando **Vue.js**, com um suporte robusto para manipulação gráfica via bibliotecas especializadas (D3/dc/C3), essencial para a natureza do produto (design tool).
