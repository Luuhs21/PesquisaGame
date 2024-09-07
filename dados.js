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
        nome: 'Star Wars Outlaws', imagem: 'img/star-wars-outlaws-img.jpg', plataformas: 'PS5, Xbox Series X|S, Geforce Now, Steam',
        descricao: ' Star Wars Outlaws é um jogo de ação e aventura em mundo aberto ambientado no universo de Star Wars. Desenvolvido pela Massive Entertainment e publicado pela Ubisoft, o jogo promete uma experiência inédita para os fãs da franquia.', site: '<a href="https://encurtador.com.br/3cNVo" target="_blank">Star Wars Outlaws</a>', tags: "nave star wars ubisoft"
    }, 
    {
        nome: 'Dragons Dogma 2', imagem: 'img/dragons-dogma-2-img.jpg', plataformas: 'PS5, Xbox Series X|S, Geforce Now, Steam',
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
        nome: 'Tekken 8', imagem: 'img/tekken-8-img.jpg', plataformas: 'PC, PS5, Xbox Series X|S, steam', descricao: 'Tekken 8 é o mais recente capítulo da lendária série de jogos de luta da Bandai Namco. Com gráficos impressionantes, graças à Unreal Engine 5, o jogo oferece uma experiência visualmente deslumbrante e imersiva. A história continua a saga da família Mishima, com Jin Kazama desafiando seu pai, Kazuya Mishima, em um confronto épico que promete abalar o mundo. A narrativa se aprofunda nos laços familiares e nas lutas internas dos personagens, prometendo uma jornada emocionante para os fãs da série.', site: '<a href="https://tekken.com/" target="_blank">Tekken 8</a>', tags: "tekken jin capcom luta"
    },
];
    // adicionar novas entradas de games a partir daqui 
