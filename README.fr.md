# darrylwin — Portfolio

Un site portfolio personnel construit avec Next.js et Tailwind CSS.

## Résumé
- Site statique / React (Next.js) présentant mes projets, compétences et moyens de contact.
- Structure : composants réutilisables dans `app/_components` (Header, Hero, Skills, Contact, Footer, ...).

## Technos
- `next` (React 19)
- `tailwindcss`, `shadcn` (UI primitives)
- `lucide-react` (icônes)
- Utilise des composants React et des utilitaires Tailwind pour le design.

## Installation et exécution
1. Installer les dépendances (pnpm recommandé vu le lockfile) :

```bash
pnpm install
pnpm dev
```

Ou avec npm :

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Structure importante
- `app/` : pages et composants principaux.
- `app/_components/` : composants UI spécifiques au site (Hero, ContactCard, Footer...).
- `components/ui/` : composants UI partagés (button, card).
- `public/` : assets publics.

## Contact
- Ceci est un projet personnel; modifiez `app/_components/ContactCard.tsx` pour mettre à jour les liens de contact.