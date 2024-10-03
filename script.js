const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da Inteligência Artificial?",
        alternativas:[{
            texto:"sim",
            afirmação:"afirmação da alternativa 1"
        },

    },
    {
        texto:"Não",
        afirmação:"afirmação da alternativa"
    }
    ]
        enunciado:"Você utililiza a inteligencia artificial no dia a dia",
        alternativas:[{alternativas:[{
            texto:"sim",
            afirmação:"afirmação da alternativa 1"
        },
    },

},
{
    texto:"Não",
    afirmação:"afirmação da alternativa"
    },
    {
        enunciado:"Você acha que ela consegue te ajudar no trabalho",
        alternativas:[{
            texto:"sim",
            afirmação:"afirmação da alternativa 1"
        },

    },
    {
        texto:"Não",
        afirmação:"afirmação da alternativa"
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function (){
            posição++;
            mostraPergunta();
        });
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
