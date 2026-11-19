# Digital Store — Projeto Final Front-end (Geração Tech 4.0 & Digital College)

Aplicação web de e-commerce desenvolvida em **React + JavaScript + Bootstrap 5**.

## Tecnologias Utilizadas
- React 18
- Vite
- React Router DOM v6
- Bootstrap 5
- CSS3 (Variables & Custom Components)

## Funcionalidades
- **Página Inicial (`/`)**: Carrossel interativo de banners, coleções em destaque, atalhos por categoria, vitrine com 8 produtos em alta e seção de oferta especial.
- **Busca Global**: Campo de busca no cabeçalho que redireciona para `/products?filter=<termo>` ao clicar na lupa ou pressionar `Enter`.
- **Listagem de Produtos (`/produtos` e `/products`)**: Filtragem combinada por Marca, Categoria, Gênero e Estado (`FilterGroup`), ordenação por Menor/Maior preço e contagem dinâmica de resultados.
- **Visualização de Produto (`/product/:id`)**: Galeria com miniaturas interativas (`Gallery`), seleção de variações de tamanho e cor (`ProductOptions`), informações e CTA de compra (`BuyBox`) e vitrine de produtos recomendados.
- **Abas Extras Funcionais**: Categorias (`/categorias`), Meus Pedidos (`/meus-pedidos` com persistência em `localStorage`), Login (`/login`) e Cadastro (`/cadastro`).

## Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Instalar arquivos extras de compilação 
npm install build

# 3. Rodar o servidor de desenvolvimento
npm run dev
```

## Observação
Depois de executar os comandos anteriores no terminal, aperte as teclas `o + Enter` para abrir a aplicação diretamente no navegador. 

## Equipe 
- [João Lucas Simões Rocha da Silveira](https://github.com/jlrock)