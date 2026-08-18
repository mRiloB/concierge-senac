# Guest Connect — Hotel Senac Ilha do Boi

Protótipo do sistema de atendimento ao hóspede (Projeto Integrador), construído em Nuxt 4 + Nuxt UI + Pinia.

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Rotas

- `/` — Página inicial do hóspede (identificação de apartamento + menu principal)
- `/servico-quarto` — Solicitações de serviço de quarto
- `/manutencao` — Relato de problemas de manutenção
- `/farmacias` — Farmácias próximas ao hotel
- `/transportes` — Ônibus (Ceturb) e transporte aquaviário
- `/late-checkout` — Solicitação de late check-out
- `/guia-tour` — Portal turístico (banner lateral)
- `/form` — Pesquisa de satisfação (acompanhamento da estadia)
- `/admin` — Painel administrativo da recepção (visualização e atualização de status das solicitações)

## Observações

- Os dados (solicitações e respostas de satisfação) são mantidos em memória via **Pinia**, sem
  persistência real — ideal para demonstração. Para produção, plugar em uma API/banco (ex: Supabase).
- O painel `/admin` já reflete em tempo real as solicitações feitas pelo hóspede, pois consomem a
  mesma store.
