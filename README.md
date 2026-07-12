# Casa Florinda

Site institucional da **Pousada Casa Florinda** — Parque Imbuí, Teresópolis/RJ.
Construído com **React + Vite**.

🔗 Produção: https://mlutegar.github.io/casa-florinda/

## Desenvolvimento

```bash
npm install          # instala dependências
npm run images       # converte/otimiza as fotos de midia/ -> public/midia/
npm run dev          # servidor local (http://localhost:5173)
npm run build        # build de produção
npm run preview      # pré-visualiza o build
```

## Editar conteúdo

Textos, contatos, acomodações, serviços, depoimentos e FAQ ficam centralizados em
[`src/data/site.js`](src/data/site.js). As imagens ficam em `public/midia/`.

## Deploy

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy.yml`) a cada push
na branch `main`. Habilite em: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Deploy manual alternativo: `npm run deploy` (usa a branch `gh-pages`).

## Domínio próprio (futuro)

Para usar `pousadacasaflorinda.com.br`:
1. Trocar `base` para `'/'` em `vite.config.js`.
2. Adicionar arquivo `public/CNAME` com o domínio.
3. Configurar o DNS apontando para o GitHub Pages.
