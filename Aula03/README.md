## 🚀 Gestão de Software: **Versionamento e Deploy**

### 🌐 Conceitos Fundamentais

O versionamento é o processo de atribuir identificadores únicos (numéricos ou por datas) a cada versão de um documento ou software, garantindo a organização e a recuperação de estados anteriores.

**Versionamento vs. Backup**: Enquanto o backup é uma cópia pontual e estática do estado atual sem rastreio de autoria, o versionamento regista o histórico detalhado de cada alteração (quem, quando e porquê).

**Colaboração**: O versionamento permite a colaboração simultânea e a reversão granular, ao passo que o backup oferece apenas a restauração total de arquivos únicos.
 
**Benefícios Profissionais**: Redução de retrabalho através da identificação precoce de conflitos, auditoria completa das mudanças e segurança na recuperação de dados.



---

### 🧱 Controle de Versão (Git)

O **Git** é o sistema de controle de versão de arquivos líder de mercado, operado via linha de comando ou interfaces integradas.

**Sincronização**: Permite baixar e enviar código para repositórios online, mantendo o trabalho da equipa sincronizado.

**Branches (Ramificações)**: Utilização de ramificações (como `main`, `develop` e `feature`) para desenvolver novas funcionalidades ou correções sem afetar a estabilidade da versão principal.

**Merge e Conflitos**: Processo de unificar alterações de diferentes branches; exige intervenção manual quando a mesma parte do código é alterada simultaneamente.

**Tags**: Marcadores específicos no histórico para identificar versões estáveis e lançamentos (*releases*).



---

### 📊 Padronização: Versionamento Semântico (SemVer)

O sistema **SemVer** é utilizado para comunicar de forma clara a natureza das mudanças num software através do padrão **MAJOR.MINOR.PATCH**.

**MAJOR**: Indica mudanças incompatíveis com versões anteriores que podem "quebrar" a aplicação.

**MINOR**: Adição de novas funcionalidades que mantêm a compatibilidade retroativa.

**PATCH**: Reservado para correções de erros (*bug fixes*) que não alteram a funcionalidade principal.
 
**Estabilidade**: A versão `1.0.0` marca o primeiro lançamento público estável, enquanto versões `0.x.x` indicam a fase de desenvolvimento inicial.



---

### ☁️ Deploy e Hospedagem

O deploy é o elo final entre o desenvolvimento e o utilizador, consistindo no processo de colocar a aplicação num ambiente de produção acessível.

* **Fluxo de Ambientes**:

**Desenvolvimento**: Ambiente local onde os erros são seguros.

**Staging**: Cópia fiel da produção utilizada para testes finais antes do lançamento.

**Produção**: O ambiente real acedido pelos utilizadores finais.

**Plataforma de Destaque (Vercel)**: Plataforma focada em sites estáticos e frameworks modernos (como React e Vue), oferecendo deploys automáticos via integração com Git (GitHub, GitLab, Bitbucket).

**Infraestrutura**: Utilização de CDNs Globais para garantir baixa latência e escalabilidade automática conforme a procura.

---

### 🧠 **Conclusão**

A adoção de práticas profissionais de **versionamento** e **deploy** é indispensável para a integridade de qualquer projeto de software moderna. O uso do Git, aliado à padronização do SemVer, garante que equipas possam colaborar de forma segura, mantendo um histórico auditável e um fluxo de entrega contínua (*deploy*) eficiente e escalável.