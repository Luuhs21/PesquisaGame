//aqui é onde todas as informações dos jogos irão, tanto para atualização quanto para inclusão de novos jogos

let jogos = [
    {
        nome: 'Black Myth: Wukong', imagem: 'img/black-myth-wukong-img.png', plataformas: 'PC, PS5, Xbox Series X|S',
        descricao: ' Black Myth: Wukong é um RPG de ação que reimagina a clássica lenda chinesa da Jornada para o Oeste. O jogo coloca os jogadores no papel de Sun Wukong, o lendário Rei Macaco, em uma aventura épica repleta de ação frenética, combates desafiadores e visuais deslumbrantes. Com uma mistura de mitologia chinesa e elementos de jogos de ação modernos, Black Myth: Wukong promete uma experiência única para os fãs do gênero.', site: '<a href="https://www.heishenhua.com/" target="_blank">Black Myth: Wukong</a>',
        tags: "dragonball rei macaco china"
    },
    {
        nome: "Senua's Saga: Hellblade II", imagem: 'img/senuas_sacrifice_hellblade_ii_img.jpg', plataformas: 'PC, Xbox Series X|S',
        descricao: 'Senuas Saga: Hellblade II é a continuação do aclamado jogo de ação e aventura psicológica. Mergulhe na mente torturada de Senua enquanto ela enfrenta novos horrores e busca vingança.', site: '<a href="https://www.xbox.com/pt-BR/games/senuas-saga-hellblade-ii" target="_blank">Senuas Saga: Hellblade II</a>',
        tags: "hellblade terror psicologico"
    },
    {
        nome: 'Hades II', imagem: 'img/hades-ii-img.png', plataformas: 'PC, PS5, Xbox Series X|S',
        descricao: ' Hades II é a sequência do aclamado rogue-lite de ação. Desça para o submundo mais uma vez e enfrente novos desafios e deuses em uma jornada épica.', site: '<a href="https://www.supergiantgames.com/games/hades-ii" target="_blank">Hades II</a>', tags: "hades rpg supergiant"
    }, 
    {
        nome: 'Star Wars Outlaws', imagem: 'img/star-wars-outlaws-img.jpg', plataformas: 'PC, PS5, Xbox Series X|S',
        descricao: ' Star Wars Outlaws é um jogo de ação e aventura em mundo aberto ambientado no universo de Star Wars. Desenvolvido pela Massive Entertainment e publicado pela Ubisoft, o jogo promete uma experiência inédita para os fãs da franquia.', site: '<a href="https://encurtador.com.br/3cNVo" target="_blank">Star Wars Outlaws</a>', tags: "nave star wars ubisoft"
    }, 
    {
        nome: 'Dragons Dogma 2', imagem: 'img/dragons-dogma-2-img.jpg', plataformas: 'PC, PS5, Xbox Series X|S',
        descricao: ' Dragons Dogma 2: Uma aventura épica com um toque único Dragons Dogma 2 é a aguardada sequência do RPG de ação que te coloca no papel de um Nascen, um herói com o coração roubado por um dragão. Com essa perda, você ganha habilidades sobrenaturais e embarca em uma jornada para derrotar a criatura e recuperar o que lhe foi tirado.', site: '<a href="https://encurtador.com.br/3cNVo" target="_blank">Star Wars Outlaws</a>', tags: "dragon dogma rpg"
    }, 
    {
        nome: 'Astro Bot: Uma Aventura Espacial Mágica', imagem: 'img/astro-bot-img.png', plataformas: 'PS5 (exclusivo)',
        descricao: ' Astro Bot é um jogo de plataforma 3D exclusivo para PlayStation 5 que leva os jogadores em uma jornada épica pelo universo. Controlando o adorável robô Astro, você embarca em uma missão para resgatar seus amigos e reconstruir sua nave, tudo enquanto explora mundos vibrantes e cheios de desafios.', site: '<a href="https://www.playstation.com/pt-br/games/astro-bot/" target="_blank">Astro Bot</a>', tags:"robo robô playstation exploração exploracao"
    },
    {
        nome: 'Paper Mario: The Thousand-Year Door - Uma aventura de papel em busca de um tesouro', imagem: 'img/paper-mario-door-img.jpg', plataformas: 'Nintendo Switch',
        descricao: 'Paper Mario: The Thousand-Year Door é um clássico RPG da Nintendo que combina elementos de aventura, plataforma e combate por turnos em um universo colorido e cheio de personalidade.', site: '<a href="https://www.nintendo.com/pt-br/store/products/paper-mario-the-thousand-year-door-switch/?srsltid=AfmBOophbXBIezXmqeVdVW_I5e9jjeelW5FD9szW90-Pqn6U46hJWzsD" target="_blank">Paper Mario: The Thousand-Year Door</a>', tags: "mario papel rpg nintendo turno turnos criança crianca"
    },
    {
        nome: 'The Legend of Zelda: Echoes of Wisdom', imagem: 'img/the-legend-of-zelda-echos-wisdom-img.jpg', plataformas: 'Nintendo Switch',
        descricao: 'The Legend of Zelda: Echoes of Wisdom é um jogo da famosa série The Legend of Zelda, lançado para o Nintendo Switch. Neste título, a protagonista é a própria Princesa Zelda, que assume o papel de heroína em uma jornada épica para salvar Hyrule.', site: '<a href="https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-echoes-of-wisdom-switch/?srsltid=AfmBOopEGZ7pFAD2lY-Q8YH0rYABqewC6DaTW05293EDMNPMvqF0040u" target="_blank">The Legend of Zelda: Echoes of Wisdom</a>', tags: "link nintendo princesa hyrule"
    },  
    {
        nome: 'Prince of Persia: The Lost Crown', imagem: 'img/prince-of-persia-img.jpg', plataformas: 'PC, PS5, PS4, Xbox Series X|S, Xbox One, Nintendo Switch', descricao: 'Prince of Persia: The Lost Crown é um jogo de plataforma e ação em 2D que te leva para um mundo mitológico persa repleto de mistérios e desafios. A história te coloca no papel de Sargon, um membro dos Imortais, que embarca em uma jornada para salvar o príncipe Ghassan. Durante essa aventura, você terá que lidar com os perigos do Monte Qaf, um lugar onde o tempo se comporta de maneira peculiar.', site: '<a href="https://www.ubisoft.com/pt-br/game/prince-of-persia/the-lost-crown" target="_blank">Prince of Persia: The Lost Crown</a>', tags: "prince persia coroa ubisoft"
    },
    {
        nome: 'Tekken 8', imagem: 'img/tekken-8-img.jpg', plataformas: 'PC, PS5, Xbox Series X|S', descricao: 'Tekken 8 é o mais recente capítulo da lendária série de jogos de luta da Bandai Namco. Com gráficos impressionantes, graças à Unreal Engine 5, o jogo oferece uma experiência visualmente deslumbrante e imersiva. A história continua a saga da família Mishima, com Jin Kazama desafiando seu pai, Kazuya Mishima, em um confronto épico que promete abalar o mundo. A narrativa se aprofunda nos laços familiares e nas lutas internas dos personagens, prometendo uma jornada emocionante para os fãs da série.', site: '<a href="https://tekken.com/" target="_blank">Tekken 8</a>', tags: "tekken jin capcom luta"
    },
    {
        nome: 'Palworld', imagem: 'img/palworld-img.jpg', plataformas: 'PC, Xbox Series X|S, Xbox One', descricao: 'Palworld é um jogo de fabricação e sobrevivência em mundo aberto com suporte para vários jogadores. Nele você reúne criaturas fantásticas conhecidas como "Pals" em um vasto mundo e as usa em batalhas ou para trabalhos em construção, fazendas ou fábricas. O jogo ainda se encontra em acesso antecipado, mas é possível aproveitar várias funcionalidades já implantadas no jogo.', site: '<a href="https://www.pocketpair.jp/palworld" target="_blank">Palworld</a>', tags: "pokemon pals mundo aberto"
    },
    {
        nome: 'PlateUp!', imagem: 'img/plateup-img.jpg', plataformas: 'PC, PS5, PS4, Xbox Series X|S, steam, Nintendo Switch', descricao: 'PlateUp! é um frenético jogo de culinária e gerenciamento de restaurantes que combina a ação caótica de cozinhar sob pressão com a estratégia de planejar e construir a cozinha perfeita. Nele, você e até três amigos assumem o papel de chefs, construindo e gerenciando seus próprios restaurantes, desde a concepção do menu até o atendimento dos clientes mais exigentes.', site: '<a href="https://store.steampowered.com/app/1599600/PlateUp/" target="_blank">PlateUp</a>', tags: "cozinha coop loucura chefe"
    },
    {
        nome: 'The Outlast Trials', imagem: 'img/the-outlast-trials-img.jpg', plataformas: 'PC, PS5, PS4, Xbox Series X|S, Nintendo Switch', descricao: 'The Outlast Trials é a mais recente adição à aclamada série de terror psicológico Outlast. Diferente dos jogos anteriores, que eram focados em uma experiência single-player, The Outlast Trials introduz um modo cooperativo, permitindo que os jogadores enfrentem os horrores juntos. Ambientado na Guerra Fria, você é recrutado pela infame Murkoff Corporation para participar de experimentos macabros. Submetido a uma série de testes cruéis, sua sanidade mental será constantemente desafiada enquanto você tenta sobreviver a armadilhas, monstros e a própria corporação.', site: '<a href="https://redbarrelsgames.com/games/the-outlast-trials/" target="_blank">The Outlast Trials</a>', tags: "terror psicologico sobrevivencia sobrevivência coop"
    },
    {
        nome: 'Stellar Blade', imagem: 'img/stellar-blade-img.jpg', plataformas: 'PS5 (exclusivo)', descricao: 'Stellar Blade é um jogo de ação e aventura em terceira pessoa que nos leva a um futuro distópico onde a Terra foi devastada por criaturas alienígenas conhecidas como Naytibas. A história gira em torno de EVE, uma androide de combate enviada para recuperar nosso planeta. Com habilidades sobrehumanas e uma espada poderosa, ela enfrenta hordas de inimigos e explora ruínas antigas em busca de respostas sobre o passado da Terra e o motivo da invasão alienígena.', site: '<a href="https://www.playstation.com/pt-br/games/stellar-blade/" target="_blank">Stellar Blade</a>', tags: "ação acao aventura rpg robos robôs"
    },
    {
        nome: 'Multiversus', imagem: 'img/multiversus-img.jpg', plataformas: 'PC, PS5, PS4, Xbox Series X|S, Xbox One', descricao: 'MultiVersus é um jogo de luta em plataforma gratuito que reúne personagens icônicos de diversos universos da Warner Bros. Imagine Batman se juntando a Bugs Bunny para enfrentar Arya Stark e Finn the Human em batalhas épicas!', site: '<a href="https://multiversus.com/pt-br" target="_blank">Multiversus</a>', tags: "ação acao aventura luta versus multiplayer "
    },
    {
        nome: 'Elden Ring Shadow Of The Erdtree', imagem: 'img/elden-ring-shadow-of-the-erdtree-img.jpg', plataformas: 'PC, PS5, PS4, Xbox Series X|S, Xbox One', descricao: 'Elden Ring: Shadow of the Erdtree é a primeira expansão oficial do aclamado jogo de RPG de ação, Elden Ring. Essa nova aventura leva os jogadores a explorar uma região inédita, a Terra das Sombras, repleta de mistérios, perigos e novas criaturas. Shadow of the Erdtree oferece aos jogadores de Elden Ring uma experiência ainda mais rica e desafiadora. Com novas áreas para explorar, inimigos para derrotar e mistérios para desvendar, a expansão promete horas de diversão para os fãs do jogo.', site: '<a href="https://en.bandainamcoent.eu/elden-ring/elden-ring/shadow-of-the-erdtree" target="_blank">Elden Ring</a>', tags: "ação acao aventura rpg anel"
    },
    {
        nome: 'Darkest Dungeon II', imagem: 'img/darkest-dungeon-II-img.jpg', plataformas: 'PC, PS5, PS4, Nintendo Switch', descricao: 'Darkest Dungeon 2 é a aguardada sequência do aclamado RPG de terror psicológico. Nesta nova aventura, você assume o papel de um Protetor, guiando um grupo de heróis em uma jornada épica para evitar o apocalipse. Darkest Dungeon 2 é uma experiência intensa e desafiadora, que promete levar os fãs do primeiro jogo a um novo nível de terror psicológico. Se você gosta de jogos com alta dificuldade, narrativa envolvente e personagens complexos, Darkest Dungeon 2 é uma ótima opção.', site: '<a href="https://www.darkestdungeon.com/darkest-dungeon-2/" target="_blank">Darkest Dungeon II</a>', tags: "rpg tatico turno sobrevivencia sobrevivência"
    },
    {
        nome: 'Cat Quest III', imagem: 'img/cat-quest-III-img.jpg', plataformas: 'PC, PS5, PS4, Nintendo Switch, Xbox Series X|S, Xbox One', descricao: 'Cat Quest III é a mais nova aventura da série de RPGs de ação com gatos como protagonistas. Desta vez, somos levados para um mundo pirata chamado Miauribe, um arquipélago repleto de tesouros e aventuras. A história gira em torno da busca pela Estrela Norte, um tesouro lendário perdido há muito tempo. Ao longo da jornada, você encontrará personagens coloridos, desvendará mistérios e viverá aventuras épicas.', site: '<a href="https://www.thegentlebros.com/catquest3/" target="_blank">Cat Quest III</a>', tags: "rpg exploracao exploração indie aventura gato pirata"
    },
    {
        nome: 'Barbie Project Friendship', imagem: 'img/barbie-project-friendship-img.jpg', plataformas: 'PC, PS5, PS4, Nintendo Switch, Xbox Series X|S, Xbox One', descricao: 'Barbie Projeto Amizade é um jogo divertido e cheio de criatividade, perfeito para os fãs da icônica boneca. Nessa aventura, você acompanha a Barbie em uma missão para salvar o Centro Comunitário Ondas de Malibu, um local querido por todos. Barbie Projeto Amizade é um jogo ideal para crianças que adoram a Barbie e querem se divertir enquanto ajudam a comunidade. É uma ótima opção para passar um tempo livre e desenvolver habilidades como criatividade e resolução de problemas.', site: '<a href="https://outrightgames.com/games/barbie-project-friendship/" target="_blank">Barbie Project Friendship</a>', tags: "amizade criancas crianca criança infantil"
    },
];
    // adicionar novas entradas de games a partir daqui 
