# 💰 Dashboard Financeiro Pessoal

## 📝 Descrição do Projeto
Este projeto é uma aplicação Front-End desenvolvida como parte da avaliação do curso técnico em informática. O objetivo principal é criar a interface de um painel de controle financeiro pessoal interativo, permitindo o registro, cálculo de saldo em tempo real e visualização dinâmica de receitas e despesas.

## 🚀 Tecnologias Utilizadas
* **HTML5:** Semântica avançada (com uso de tags estruturais como `<header>`, `<main>`, `<section>`, `<footer>`) e formulários com validação nativa.
* **CSS3:** Estilização personalizada, tipografia (Google Fonts Poppins), efeitos de micro-interações (`hover`), barra de rolagem customizada e degradês lineares.
* **Bootstrap 5:** Framework CSS para construção do layout responsivo baseado em Grid (`container`, `row`, `col`), cards e utilitários visuais.
* **JavaScript:** Manipulação dinâmica do DOM, tratamento de formulários, persistência de dados utilizando **LocalStorage** e ordenação inteligente de elementos.
* **Chart.js:** Biblioteca externa utilizada para renderização de gráficos estatísticos em formato de rosca (*doughnut*).

## ✨ Funcionalidades Implementadas
1. **Cadastro de Lançamentos:** Registro de receitas (+) e despesas (-) com descrição e valores monetários validados.
2. **Cálculo Automático de Saldo:** Atualização dinâmica do saldo total na tela, alternando cores automaticamente entre verde (positivo) e vermelho (negativo).
3. **Histórico Dinâmico:** Listagem organizada em tempo real, priorizando a exibição de receitas no topo e salvando os dados no navegador para que não se apaguem ao atualizar a página.
4. **Gráfico Interativo:** Visualização gráfica da distribuição de despesas com tooltips formatados em moeda brasileira (R$).

## ⚙️ Instruções de Execução
Como este é um projeto estático baseado no navegador, a execução é muito simples:
1. Faça o download ou clone este repositório (`git clone`).
2. Abra a pasta do projeto em seu editor de preferência (como o VS Code).
3. Dê um duplo clique no arquivo `index.html` ou abra-o utilizando a extensão **Live Server** no seu navegador de preferência.