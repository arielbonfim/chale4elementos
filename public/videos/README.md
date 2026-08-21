# Arquivos de Vídeo do Chalé 4 Elementos

Esta pasta contém os arquivos de mídia em vídeo do projeto:

1. `hero.mp4` — Vídeo de fundo em loop da seção Hero (recomenda-se resolução 1080p, sem áudio, bitrate otimizado ~5MB).
2. `tour.mp4` — Vídeo guiado 4K da área interna e externa para o componente `VideoTour.tsx`.
3. `chegada.mp4` — Vídeo demonstrativo do percurso de chegada e estrada até o chalé em `Localizacao.tsx`.

Para substituição em produção no Vercel ou CDN (ex: Cloudinary, Mux ou Vercel Blob):
- Basta colocar os arquivos `.mp4` correspondentes nesta pasta `/public/videos/` ou atualizar a prop `src` nos componentes.
