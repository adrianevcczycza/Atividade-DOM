
let valor = 0;

function aumentar() {
    valor++;
    document.getElementById("contador").innerText = valor;
}

function diminuir() {
    valor--;
    document.getElementById("contador").innerText = valor;
}

function corAleatoria() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function corFundo() {
    document.body.style.backgroundColor = corAleatoria();
}

function corTitulo() {
    document.getElementById("titulo").style.color = corAleatoria();
}

function corParagrafo() {
    document.getElementById("paragrafo").style.color = corAleatoria();
}

let fontes = [
    "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins",
    "Oswald", "Raleway", "Nunito", "Ubuntu", "Playfair Display",
    "Merriweather", "Inter", "PT Sans", "Fira Sans", "Quicksand"
];

function fonteTitulo() {
    let fonte = fontes[Math.floor(Math.random() * fontes.length)];
    document.getElementById("titulo").style.fontFamily = fonte;
}

function fonteParagrafo() {
    let fonte = fontes[Math.floor(Math.random() * fontes.length)];
    document.getElementById("paragrafo").style.fontFamily = fonte;
}
function alterarTudo() {
    corFundo();
    corTitulo();
    corParagrafo();
    fonteTitulo();
    fonteParagrafo();
}