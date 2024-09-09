
let buscaInput = document.getElementById('busca');
let resultadosDiv = document.getElementById('resultados');
let botaoLimpar = document.getElementById('botao-limpar');
let botaoInicio = document.getElementById('botao-topo');
window.onscroll = function() {scrollFunction()};
let dados = []; //acessa o arquivo dados onde estão sendo guardados as informações dos jogos 



buscaInput.addEventListener('input', () => {
    let termoBusca = buscaInput.value.toLowerCase().trim(); //verifica se a busca está em letra maiuscula e transforma em letra minuscula, alem disso verifica se há espaço antes ou depois do que foi escrito
    botaoLimpar = resultadosDiv.innerHTML = ''; // Limpa os resultados anteriores
    // termoBusca = termoBusca.toLowerCase();
    

    jogos.forEach(jogo => {
       
        if (termoBusca === '') {
            resultadosDiv.classList.remove(); //faz com que as informações da base não sejam mostradas após o usuário digitar e apagar manualmente
        } else if (jogo.nome.toLowerCase().includes(termoBusca) || jogo.descricao.toLocaleLowerCase().includes(termoBusca) || jogo.tags.includes(termoBusca)) { //chama as informações do jogo pesquisado na tela além de pesquisar na descricao palavras semelhantes 
            let resultadoDiv = document.createElement('div');
            resultadoDiv.classList.add('resultado');
            resultadoDiv.innerHTML = `
                    <img src="${jogo.imagem}" alt="${jogo.nome}">
                    <div>
                        <h2>${jogo.nome}</h2>
                        <p>Plataformas: ${jogo.plataformas}</p>
                        <p>${jogo.descricao}</p>
                        <p>${jogo.site}</p>
                    </div>
                `;
            resultadosDiv.appendChild(resultadoDiv);
        }
    });
});

botaoInicio.addEventListener("click", topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botaoInicio.style.display = "block";
    } else {
        botaoInicio.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}



