console.log("Site carregado com sucesso!");


// =========================
// MODO ESCURO
// =========================

const botaoTema = document.querySelector("#btnTema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {

        botaoTema.textContent = "☀️ Modo claro";

    } else {

        botaoTema.textContent = "🌙 Modo escuro";

    }

});


// =========================
// FOTO
// =========================

const foto = document.querySelector("#fotoPerfil");

foto.addEventListener("mouseover", function () {

    foto.style.transform = "scale(1.05)";

});

foto.addEventListener("mouseout", function () {

    foto.style.transform = "scale(1)";

});


// =========================
// RELÓGIO
// =========================

const relogio = document.querySelector("#relogio");

function atualizarRelogio() {

    const agora = new Date();

    relogio.textContent =
        agora.toLocaleTimeString("pt-BR");

}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();


// =========================
// BOTÃO DO PERFIL
// =========================

const botaoPerfil = document.querySelector("#btnTema2");

botaoPerfil.addEventListener("click", function () {

    alert(
        "Olá! Este é o meu perfil. Obrigada por visitar!"
    );

});