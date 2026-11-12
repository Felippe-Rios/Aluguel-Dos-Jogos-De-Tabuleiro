# AluGames

Página web simples para praticar lógica com JavaScript. O projeto apresenta alguns boardgames e permite alternar o status de cada jogo entre **Alugar** e **Devolver**.

## Funcionalidades

- Exibe os jogos Monopoly, Ticket to Ride e Takenoko.
- Indica visualmente quando um jogo está alugado.
- Alterna o status do jogo ao clicar no botão correspondente.
- Mostra o nome do jogo selecionado em uma mensagem.

O status é mantido apenas enquanto a página está aberta; ao recarregá-la, os valores iniciais do HTML são restaurados.

## Tecnologias

- HTML
- CSS
- JavaScript

## Como executar

Não é necessário instalar dependências ou compilar o projeto. Abra o arquivo `index.html` em um navegador. Se preferir, use uma extensão de servidor local, como o Live Server, no editor de código.

## Estrutura do projeto

```text
alugames/
├── css/
│   ├── _reset.css
│   └── main.css
├── img/
│   ├── fade_bar.svg
│   ├── hachuras.svg
│   ├── logo.svg
│   ├── monopoly.png
│   ├── takenoko.png
│   └── ticket_to_ride.png
├── js/
│   └── app.js
├── index.html
└── readme.md
```
