
var textinput = document.querySelector("#input-texto");
var outputSection = document.querySelector("#output");

function criptografar() {
    var texto = textinput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat");

    outputSection.innerHTML = 
        '<textarea readonly class="output-textarea no-margin-left" id="output-textarea">' + 
        resultCripto + 
        '</textarea>' + 
        '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textinput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
        .replace(/ober/g, "o").replace(/ufat/g, "u");

    outputSection.innerHTML = 
        '<textarea readonly class="output-textarea no-margin-left" id="output-textarea">' + 
        resultDescripto + 
        '</textarea>' + 
        '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('output-textarea');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}
