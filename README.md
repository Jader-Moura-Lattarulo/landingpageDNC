# Escola DNC - Landing Page

Este repositório contém o código-fonte para a landing page da Escola DNC, desenvolvida para promover o curso gratuito de Introdução à Tecnologia. A página apresenta informações sobre o curso, incluindo o conteúdo, certificação e carga horária, além de um formulário de inscrição.

## Acesso ao Site

A landing page está disponível online pelo Netlify no seguinte link: [Escola DNC - Landing Page](https://landingpagedncjmdev.netlify.app/).

## Estrutura do Projeto

- **HTML:** Estrutura principal da página, com seções bem definidas para menu, informações do curso, vídeo promocional, carrossel de depoimentos de alunos e formulário de inscrição.
- **CSS:** Arquivo `style.css` localizado em `./assets/styles` para o design e estilização da página.
- **JavaScript:** Arquivo `main.js` localizado em `./assets/js` que controla a funcionalidade do carrossel de depoimentos.

## Seções da Página

1. **Top Menu:** Contém o logo da Escola DNC, título e descrição do curso.
2. **Informational Menu:** Mostra informações adicionais como a certificação de conclusão, carga horária e formato das aulas.
3. **Video Section:** Inclui um vídeo promocional do YouTube com uma descrição do curso.
4. **Carrossel:** Apresenta depoimentos de alunos em um formato deslizante, controlado por setas para navegação.
5. **Formulário de Inscrição:** Um formulário simples para capturar o nome, e-mail e telefone dos interessados, com envio via [SheetMonkey](https://sheetmonkey.io/).

## Scripts

O arquivo `main.js` fornece a funcionalidade de navegação para o carrossel de depoimentos:
- **scrollRight()**: Mostra os próximos depoimentos ao ocultar o primeiro e atualizar as setas de navegação.
- **scrollLeft()**: Volta à exibição dos depoimentos iniciais, com ajuste nas setas de navegação.

## Como Usar

1. Clone o repositório.
2. Certifique-se de que a estrutura de pastas siga a organização:
   - `./assets/styles/style.css` para o CSS.
   - `./assets/js/main.js` para o JavaScript.
   - `./assets/images` para o logo e ícones.
   - `./assets/cards` para as imagens dos depoimentos.

3. Abra o arquivo `index.html` em um navegador para visualizar a página.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **SheetMonkey** (para coleta de dados do formulário)

## Licença

Este projeto é para uso educacional e interno na Escola DNC.
