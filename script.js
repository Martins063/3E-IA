const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não",
            afirmação: "Afirmação da alternativa"
        }
        ]
    },
    {
        enunciado: "Você utiliza inteligencia artificial no trabalho",
        alternativas: [{
            texto: "utilizo",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto:"Não utilizo",
            afirmação:"Afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado: "Te ajuda muito no seu trabalho",
        alternativas: [{
            texto: "Sim",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não",
            afirmação: "Afirmação da alternativa"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    caixaAlternativa.innerHTML ='';
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => repostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function repostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Você acha que a inteligencia artificial vai ocupar empregos futuramente"
}
mostraPergunta();
