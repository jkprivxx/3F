const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abaconteudo");
const contador = document.querySelectorAll(".contador");
contador[0].textContent="ola"
const tempoObjetivo1 = new Date(2024,10,21,19,15);
const tempoObjetivo2 = new Date(2025,10,11,18,05);
const tempoObjetivo3 = new Date(2024,03,25,10.10);
const tempoObjetivo4 = new Date(2025,05,22,00,00)

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
            
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")


    }
}



