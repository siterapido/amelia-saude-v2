# Documentação do site — Amélia Saúde

Documento de referência para desenvolvimento do site institucional. Conteúdo alinhado ao site publicado em **[ameliasaude.com.br](https://ameliasaude.com.br/)** (consultado para esta versão da documentação).

---

## 1. Proposta de valor e posicionamento

### Mensagem central

- **Headline principal:** Planos que cuidam de você de verdade.
- **Promessa:** Conectar o usuário aos melhores médicos, clínicas, centros médicos e laboratórios, **sem burocracias**.

### Públicos implícitos

- Pessoa física (você).
- Família.
- Empresa.

### Tom de voz (inferido do texto)

- Acolhedor e direto (“de verdade”, “pertinho de você”).
- Foco em simplicidade e eficiência (“simples”, “sem complicações”, “sem burocracias”).
- Confiança técnica (protocolos, taxa de resolutividade, rede credenciada).

---

## 2. Arquitetura de conteúdo sugerida (seções da página)

Ordem lógica para uma landing ou home, alinhada ao fluxo narrativo do texto:

| Ordem | Bloco | Função |
|-------|--------|--------|
| 1 | Hero | Proposta de valor + CTA principal |
| 2 | Planos (pessoa, família, empresa) | Escopo de produto + coberturas + CTA secundário |
| 3 | Rede credenciada | Localização e abrangência geográfica |
| 4 | Time de especialistas 24h | Suporte em urgência/emergência + CTA |
| 5 | Telemedicina | Canal digital, especialidades e resultados |
| 6 | Planos coletivos por adesão | Profissionais via entidades de classe |
| 7 | Planos empresariais (PME) | Micro, pequenas e médias empresas |
| 8 | Contato | Telefones e canais de atendimento |

Páginas filhas prováveis (não detalhadas no conteúdo atual): planos detalhados, rede credenciada (busca), políticas legais, área do beneficiário (se existir produto digital).

---

## 3. Conteúdo por seção (copy conforme o site)

### 3.1 Hero (abertura do site)

- **Título:** Planos que cuidam de você de verdade
- **Subtítulo / descrição:** Conectamos você aos melhores médicos, clínicas, centros médicos e laboratórios, sem burocracias.
- **CTA:** Fale Conosco

**Notas para UI/UX**

- CTA deve ser o elemento de ação mais visível após o título.
- Reforçar visualmente os quatro pilares da rede: médicos, clínicas, centros médicos, laboratórios.

---

### 3.2 Planos de saúde

- **Título / frase de efeito:** Planos de saúde para você, sua família e sua empresa, simples e sem complicações
- **Benefícios / cobertura (lista factual do texto):**
  - Consultas
  - Exames
  - Internações
  - Cirurgias
- **CTA:** Conheça nossos planos

**Notas para desenvolvimento**

- Esta seção introduz **três perfis**: individual, familiar, empresarial — a interface pode usar abas, cards ou três colunas, desde que o copy permaneça fiel ao texto.
- A lista de coberturas é o núcleo informativo; vale destaque tipográfico ou ícones, sem alterar o significado.

---

### 3.3 Rede credenciada (Rio de Janeiro)

- **Título / claim:** A rede credenciada mais eficiente do Rio de Janeiro pertinho de você
- **Detalhe geográfico:** Presente em mais de oito municípios, com acesso a diversos hospitais no Rio e grande rio

**Dados fixos para não distorcer**

- Região: Rio de Janeiro e Grande Rio.
- Municípios: **mais de oito** (não especifica nomes no texto — evitar inventar lista de cidades no conteúdo até haver base oficial).
- Hospitais: **diversos** (quantidade exata não informada no texto).

**Notas para desenvolvimento**

- Mapa, lista de municípios ou busca por CEP são decisões de produto; o copy acima é o que está garantido pelo briefing.
- “Mais eficiente” é claim de marketing — em implementação legal/compliance, validar se há estudo ou referência interna antes de usar como headline em anúncios regulados.

---

### 3.4 Especialistas 24 horas

- **Título:** Um time de especialistas em saúde para cuidar de você, disponível 24h
- **Descrição:** Atuamos como ponto de contato único para auxiliá-lo em casos de urgência e emergência, com atendimento ágil e personalizado.
- **CTA:** Fale com um especialista agora

**Conceitos-chave (para design de fluxo)**

- **Ponto de contato único** — reforçar na UX um canal claro (telefone, chat, app) conforme o produto real.
- **Urgência e emergência** — linguagem sensível; botões e textos devem ser claros e não substituir orientação médica ou SAMU quando aplicável.

---

### 3.5 Telemedicina

- **Título / benefício:** Use a telemedicina para ter mais praticidade e comodidade, com mais de 30 especialidades médicas
- **Detalhamento operacional / clínico (texto fornecido):**
  - Seguimos protocolos clínicos específicos por especialidade.
  - Prescrição eletrônica de medicamentos, exames e atestados.
  - A taxa de resolutividade dos atendimentos alcança uma média de **80%** já na **primeira consulta**.

**Dados numéricos oficiais**

| Métrica | Valor no texto |
|---------|----------------|
| Especialidades (telemedicina) | Mais de 30 |
| Resolutividade na 1ª consulta | Média de 80% |

**Notas para desenvolvimento**

- O **80%** deve ser exibido com o contexto “média” e “primeira consulta”, para evitar interpretação enganosa.
- “Protocolos clínicos específicos por especialidade” pode virar bloco de confiança (ícones por especialidade apenas se houver lista oficial; o texto não enumera as 30+ especialidades).

---

### 3.6 Planos coletivos por adesão

- **Título:** Planos coletivos por adesão:
- **Descrição:** Para diversas categorias profissionais, através de entidades de classe como conselhos, sindicatos e associações.

**Notas para desenvolvimento**

- Deixar claro que a adesão ocorre **via entidades** (conselhos, sindicatos, associações), não necessariamente contratação direta no mesmo fluxo do PF.

---

### 3.7 Planos empresariais (PME)

- **Título:** Planos empresariais (PME):
- **Descrição:** Para micro, pequenas e médias empresas com até 29 funcionários.

**Dado numérico oficial (limite de elegibilidade)**

| Regra | Valor no site |
|--------|----------------|
| Porte PME no texto | Até **29 funcionários** |

---

### 3.8 Contato

Conforme estrutura exibida no site:

- **Seção:** Contato
- **Telefones listados na captura de conteúdo:** (21) 99999-9999 · 0800 000 000

**Atenção**

- Os números acima seguem o padrão de **placeholder** (99999-9999, 000 000). Substituir pelos **telefones reais** da operação antes de produção e garantir `tel:` + DDI/DDD corretos para clique no mobile.

---

## 4. Mapa de CTAs

| Texto do CTA | Seção provável | Intenção do usuário |
|---------------|----------------|---------------------|
| Fale Conosco | Hero | Contato geral / primeiro passo |
| Conheça nossos planos | Planos | Conversão / descoberta de produto |
| Fale com um especialista agora | Especialistas 24h | Urgência, dúvida de saúde, suporte humano |

**Recomendação de implementação**

- Definir para cada CTA: URL, âncora, modal, telefone (`tel:`), WhatsApp ou formulário — conforme operação real da Amélia Saúde.
- Manter rótulos **exatamente** como no briefing ou justificar qualquer microcopy alternativo com o time de marketing.

---

## 5. Glossário de termos do domínio (uso consistente)

- **Rede credenciada:** conjunto de prestadores (médicos, clínicas, centros médicos, laboratórios, hospitais) com acordo para atendimento aos beneficiários.
- **Telemedicina:** atendimento à distância com protocolos por especialidade; inclui prescrição eletrônica.
- **Ponto de contato único:** modelo em que o beneficiário tem um canal centralizado para orientação, inclusive em urgência/emergência (conforme descrição do texto).

---

## 6. Requisitos de conteúdo para acessibilidade e SEO (derivados do texto)

- Hierarquia de títulos: um `<h1>` principal alinhado ao hero (“Planos que cuidam de você de verdade” ou decisão de marca se o logo já ocupar o `<h1>` — documentar a escolha no projeto).
- Cada bloco principal deve ter heading semântico (`h2`) correspondente às seções da tabela da seção 2.
- CTAs com texto descritivo quando possível (ex.: manter “Fale Conosco” mas garantir `aria-label` ou contexto se houver vários botões iguais).
- Palavras-chave naturais presentes no copy: planos de saúde, Rio de Janeiro, Grande Rio, telemedicina, rede credenciada, família, empresa, planos coletivos por adesão, PME, sindicatos, conselhos, associações.

---

## 7. O que o texto **não** especifica (lacunas para o time preencher)

Sem inventar no site até haver fonte oficial:

- Nomes dos municípios (além de “mais de oito”).
- Lista de hospitais ou prestadores.
- Lista das 30+ especialidades de telemedicina.
- Preços, tabelas de planos, carências, registro na ANS (números de produto), documentos legais.
- E-mail, endereço físico, horários por canal (o site lista telefones na seção Contato — validar se são definitivos ou placeholder).
- Prova ou metodologia por trás da “rede mais eficiente” e do cálculo da taxa de 80% (útil para time jurídico/compliance).

---

## 8. Checklist rápido para o desenvolvedor

- [ ] Hero com headline, subtítulo e CTA “Fale Conosco”.
- [ ] Seção planos com os quatro tipos de cobertura e CTA “Conheça nossos planos”.
- [ ] Seção rede: eficiência + Rio/Grande Rio + 8+ municípios + hospitais (sem dados extras inventados).
- [ ] Seção 24h com “ponto de contato único” e CTA “Fale com um especialista agora”.
- [ ] Seção telemedicina: 30+ especialidades, protocolos, prescrição eletrônica, 80% na primeira consulta (com redação fiel).
- [ ] Seção planos coletivos por adesão (entidades de classe).
- [ ] Seção PME (até 29 funcionários).
- [ ] Bloco Contato com telefones reais e links `tel:` válidos.
- [ ] CTAs rastreáveis (analytics) e destinos definidos pelo negócio.

---

*Documentação revisada com base no conteúdo textual de [ameliasaude.com.br](https://ameliasaude.com.br/).*
