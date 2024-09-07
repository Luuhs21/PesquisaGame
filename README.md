###Pesquisando sobre Games em 2024 - Imersão Dev Alura com Google Gemini

### Introdução

- **Objetivo:** Apresentar um site web desenvolvido para auxiliar os usuários a encontrar informações sobre jogos lançados em 2024.
- **Público-alvo:** Gamers e curiosos interessados em acompanhar os lançamentos mais recentes da indústria.
- **Tecnologias utilizadas:** HTML, CSS e JavaScript.

### Desenvolvimento

- **Planejamento:**
    - Definição das funcionalidades principais: busca por nome, exibição de detalhes dos jogos (nome, plataforma, descrição, imagem, site do jogo e tags para facilitar a busca).
    - Criação de animações de transição dentro do CSS para a entrada das informações.
    - Criação de um botão para limpar as informações digitadas.
- **Implementação:**
    - **Estrutura HTML:** Criação da estrutura básica do site, incluindo elementos como header, footer, seção de busca e seção de resultados.
    - **Estilização CSS:** Aplicação de estilos visuais, como cores , fontes, layout e animações de transição.
    - **Lógica JavaScript:** Desenvolvimento da lógica para:
        - Capturar a entrada do usuário no campo de busca.
        - Filtrar os dados dos jogos com base na pesquisa.
        - Atualizar a interface com os resultados da pesquisa.
        - Implementar o botão "Limpar" para reiniciar a busca.
- **Design:**
    - Escolha das cores e fontes para criar uma interface visualmente agradável e intuitiva.
    - Utilização de imagens para ilustrar os jogos e tornar a experiência mais rica.

### Resultados

- **Funcionalidades:**
    - Busca por nome de jogo.
    - Busca por palavras que estejam relacionadas ao jogo.
    - Busca por tags relacionadas ao jogo.
    - Exibição detalhada dos jogos encontrados.
    - Limpeza da busca.
    - Animações de transição.
      
- **Desafios e soluções:**
    - Limitação do tamanho das imagens dentro dos campos indicados para a aparecer as informações.
    - Implementação da animação de entrada e saída das informações na tela principal para que não aparecessem quando o usuário, após ter digitado e apagasse a informação manualmente, não aparecesse os jogos disponíveis dentro do banco.
    - Fazer a documentação onde estão sendo salvas as informações sobre os jogos serem reconhecidas pela documentação onde está a programação.
    - A solução encontrada para as imagens foi a limitação do container onde todas as informações estavam inseridas e que não permitia que as outras estilizações fossem aplicadas.
    - A implementação das animações foi outro desafio encontrado, o Gemini foi fundamental para conseguir entender a lógica necessária e aplicá-la para o funcionamento com o código.
    - Após alguns testes e inúmeras pesquisas e perguntas junto ao Gemini, foi implementado através da inicialização dos dados no arquivo da programação para que ele pudesse identificar e chamar as informações adicionadas na outra documentação.

- **Aprendizados:** Os conhecimentos adquiridos foram inúmeros, mas destaco em relação ao javascript e as possibilidades que ele proporciona. Com a implementação do projeto pude entender como buscar as informações para facilitar buscas não só por nomes escritos em letra maiúscula assim como a busca com a utilização de palavras e tags;
- A percepção das diversas formas de identificar um problema e as dificuldades para conseguir soluciona-lo, por exemplo, além do código ainda temos a opção de utilizar a aba console para identificar erros e entender o que pode estar errado na execução do código.
- **Próximos passos:**
- Possíveis melhorias futuras:
    - Inclusão de mais jogos,
    - possível integração com algum site ou sistema que indique o lançamento de novos jogos e atualize as informações,
    - Implementação da transição animada de saída das informações,
    - Criação de uma barra de menu para listar jogos por categoria.
