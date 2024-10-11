const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você tem um plano de negócio?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim tenho meu plano de negócio"}, 

            {texto: "Não",
            afirmação:"Não tenho meu plano de negócio"}]
    },
    { 
        enunciado: "Você ja realizou uma pesquisa de mercado?",
        alternativas: [
            {texto: "Sim",
            afirmação:"sim já realizei"}, 
                
            {texto: "Não",
            afirmação:"Não realizei"}]
    },
    { 
        enunciado: "Você tem financiamento suficiente para os primeiros meses de operação?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim tenho bastante dinheiro"}, 
                
            {texto: "Não",
            afirmação:"Não tenho tou liso"}]
    },
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
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
