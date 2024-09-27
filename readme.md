## Desafio Front-end - CNN Brasil
O teste consiste em criar um plugin que tenha um bloco para o editor de blocos do WordPress (Gutenberg) que exibirá uma lista de livros usando a API Gutendex.

### Índice
1. [Funcionamento do plugin](#funcionamento-do-plugin)
2. [Instruções para o teste](#instruções-para-o-teste)
3. [Requisitos](#requisitos)
4. [Extras](#extras)

#### Funcionamento do plugin
- Ao ativar o plugin, ele já deve estar funcional, não deve ser necessário nenhum tipo de configuração ou ajuste prévio;
- O plugin deve disponibilizar um único bloco para o Gutenberg, o nome deve ser **Biblioteca Virtual**;
- O bloco deve ter opções para configurar a listagem dos livros, mais detalhes estão no final desse arquivo;
- O bloco deve consumir a API Gutendex e trazer no layout a lista com os livros retornados;
- O bloco deve ter um botão para "Carregar mais" livros. Ao clicar, a listagem atual deve ser apagada e criada uma nova com mais livros;
- O layout do bloco deve ser responsivo.

#### Instruções para o teste
A avaliação do teste será feita aqui no GitHub, então não se esqueça de seguir esses passos:
- Faça um fork deste repositório;
- Desenvolva todo o projeto na branch master;
- Após finalizado, abra uma PR com o código para este repositório;
- Caso tenha dúvidas sobre o funcionamento do plugin, entre em contato com o recrutador.

A API que deve ser consultada é a seguinte:
- https://gutendex.com/

No site está toda a informação necessária para fazer as consultas na API

O layout do Figma está no seguinte arquivo:
- https://www.figma.com/design/qw5tyMeStsXOSqebAjrD6C/Desafio-Front-end---CNN-Brasil

O repositório já foi configurado usando o [@wordpress/create-block](https://www.npmjs.com/package/@wordpress/create-block).

#### Requisitos
- O plugin deve ser compatível com a versão mais recente do WordPress;
- Deve-se usar preferencialmente funções e hooks nativos do WordPress ao invés de funções equivalentes do JavaScript ou React;
- O código deve seguir os padrões estabelecidos pelo WordPress Coding Standards e WP VIP Coding Standards;
- O código deve ser validado utilizando os comandos do [@wordpress/create-block](https://www.npmjs.com/package/@wordpress/create-block);
- O layout do bloco deve seguir o que foi apresentado no Figma;
- Todo o código do projeto deve estar em um único plugin.

O bloco deve ter duas configurações que devem ser exibidas na sidebar do editor:
- **Esconder Autores**: Oculta o nome dos autores na lista de livros
- **Idioma**: Um select para seleção do idioma dos livros, sendo o padrão `pt`. As opções devem ser `pt`, `fr`, `en`.

#### Extras
- Dessenvolver o bloco usando TailwindCSS e TypeScript são diferenciais;
- Não é necessário adicionar arquivos do Docker ou adicionar o código do WordPress no repositório.
