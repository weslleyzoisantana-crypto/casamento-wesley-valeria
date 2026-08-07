// ===========================
// CONTAGEM REGRESSIVA
// ===========================

const dataCasamento = new Date("September 19, 2026 17:00:00").getTime();

const contador = setInterval(function () {

const agora = new Date().getTime();

const distancia = dataCasamento - agora;

const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

const horas = Math.floor(
(distancia % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);

const minutos = Math.floor(
(distancia % (1000 * 60 * 60)) /
(1000 * 60)
);

const segundos = Math.floor(
(distancia % (1000 * 60)) /
1000
);

document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;

if (distancia < 0) {

clearInterval(contador);

document.querySelector(".countdown").innerHTML =

"<h2>Chegou o grande dia! ❤️</h2>";

}

}, 1000);


// ===========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===========================

const elementos = document.querySelectorAll(
"section, .card, .presente"
);

const aparecer = () => {

elementos.forEach((item) => {

const topo = item.getBoundingClientRect().top;

if (topo < window.innerHeight - 80) {

item.classList.add("mostrar");

}

});

};

window.addEventListener("scroll", aparecer);

window.addEventListener("load", aparecer);


// ===========================
// MENU MOBILE
// ===========================

const botao = document.createElement("div");

botao.className = "menu-mobile";

botao.innerHTML = "☰";

document.querySelector("header").appendChild(botao);

botao.onclick = () => {

document.querySelector("nav").classList.toggle("ativo");

};


// ===========================
// FECHAR MENU AO CLICAR
// ===========================

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", () => {

document.querySelector("nav").classList.remove("ativo");

});

});


// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const topo = document.createElement("button");

topo.innerHTML = "↑";

topo.className = "topo";

document.body.appendChild(topo);

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

topo.classList.add("show");

}else{

topo.classList.remove("show");

}

});

topo.onclick = () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

};
