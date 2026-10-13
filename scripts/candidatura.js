const xingamentosAntigos = [
    "alcoviteiro",
    "biltre",
    "beócio",
    "calhorda",
    "energúmeno",
    "janota",
    "mentecapto",
    "mequetrefe",
    "mocorongo",
    "paspalho",
    "palerma",
    "patife",
    "pulha",
    "purgante",
    "sacripanta"
];

const comentario = document.getElementById('comentario');
const submitBtn = document.getElementById('submit-btn');

comentario.addEventListener('input', () => {
    const texto = comentario.value.toLowerCase();
    const palavraEncontrada = xingamentosAntigos.find(palavra =>
        texto.includes(palavra)
    );

    if (palavraEncontrada) {
        alert(`Palavra imprópria detetada: "${palavraEncontrada}". Por favor, remove-a para continuar.`);
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
});
