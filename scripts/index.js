// Slideshow da galeria
const imagensSlideshow = [
    "images/slideshow1.jpeg",
    "images/slideshow2.jpeg",
    "images/slideshow3.jpeg"
];

let indiceAtual = 0;
const elementoImg = document.getElementById("slide-img");

// Função para atualizar a imagem mostrada
function mostrarImagem(index) {
    if (elementoImg) {
        elementoImg.src = imagensSlideshow[index];
    }
}

// Controlo manual: Botão Seguinte
const btnSeguinte = document.getElementById("btn-seguinte");
if (btnSeguinte) {
    btnSeguinte.addEventListener("click", () => {
        indiceAtual++;
        if (indiceAtual >= imagensSlideshow.length) {
            indiceAtual = 0; // Volta à primeira imagem se chegar ao fim
        }
        mostrarImagem(indiceAtual);
    });
}

// Controlo manual: Botão Anterior
const btnAnterior = document.getElementById("btn-anterior");
if (btnAnterior) {
    btnAnterior.addEventListener("click", () => {
        indiceAtual--;
        if (indiceAtual < 0) {
            indiceAtual = imagensSlideshow.length - 1; // Vai para a última imagem
        }
        mostrarImagem(indiceAtual);
    });
}

// Mudança automática com base num temporizador (setInterval a cada 3 segundos)
setInterval(() => {
    indiceAtual++;
    if (indiceAtual >= imagensSlideshow.length) {
        indiceAtual = 0;
    }
    mostrarImagem(indiceAtual);
}, 3000);

// Countdown para a data da festa
const dataFesta = new Date('2030-08-15T10:00:00');

function atualizarCountdown() {
    const agora = new Date();
    const diff = dataFesta - agora;

    if (diff <= 0) {
        document.getElementById('dias').textContent = '0';
        document.getElementById('horas').textContent = '0';
        document.getElementById('minutos').textContent = '0';
        document.getElementById('segundos').textContent = '0';
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

atualizarCountdown();
setInterval(atualizarCountdown, 1000);
