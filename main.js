document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Queridos professores, hoje é o dia de celebrar vocês, " +
        "Não tem palavras no mundo capaz de agradecer vocês por tudo que fazem por nós" +
        "Nesse dia tão especial, quero que vocês saibam da sua importância em nossa vida" +
        "São vocês, professores, que nos moldam para nossa vida, que nos ensinam tudo, e nos preparam para o mundo" +
        "Minha gratidão a vocês é imensa, e minha admiração pelo seu trabalho aumenta a cada dia" +
        "Amo todos vocês, guerreiros sem capa, que nos inspirm todo os dias." +
        "Feliz Dia dos Professores!";
    });
});

