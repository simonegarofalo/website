# CLAUDE.md

## Progetto
Sito vetrina per servizi di manutenzione e sviluppo web.
Servizi offerti: WordPress, Shopify, Next.js/React custom.
Pubblico target: piccole e medie imprese, negozi e-commerce, professionisti.

## Stack
- Next.js 14+ (App Router)
- React
- TypeScript
- Tailwind CSS

## Frontend
Per il frontend segui le linee guida in ./skills/frontend-design/SKILL.md

### Principi chiave:
- Direzione estetica precisa e coerente prima di scrivere codice
- CSS variables per colori e temi
- Animazioni con Motion library (`motion/react`)
- Tipografia distintiva: evita Inter, Roboto, Arial
- Componenti accessibili (ARIA), responsive, production-grade

### Pattern Next.js:
- App Router con Server Components dove possibile
- Client Components (`"use client"`) solo per interattività e hooks
- Componenti base in `components/ui/`
- Kebab-case per file, PascalCase per componenti

## SEO (importante per un sito vetrina)
- Usa sempre `generateMetadata()` per ogni pagina
- Immagini con `next/image` e alt text descrittivi
- Struttura semantica HTML corretta (h1, h2, article, section...)
- Schema.org markup per LocalBusiness/Service dove rilevante

## Performance
- Preferisci Server Components per contenuti statici
- Lazy loading per componenti pesanti con `dynamic()`
- Ottimizza immagini con `next/image`

## Comportamento generale
- TypeScript tipizzato, evita `any`
- Composizione su prop-drilling
- Ogni componente ha un solo scopo chiaro
- Commenta solo dove la logica non è autoevidente