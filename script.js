const inputMensagem = document.querySelector(".texto__entrada");
const inputResultado = document.querySelector(".resultado");

const btnEncriptar = document.querySelector(".criptografar");
const btnDesencriptar = document.querySelector(".descriptografar");
const btnCopiar = document.querySelector(".copiar");



function encriptar (){
    var mensagem = inputMensagem.value;
    var mensagemEncriptada = mensagem
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("o", "ober")
    .replace("a", "ai")
    .replace("u", "ufat");

    inputResultado.value = mensagemEncriptada;

    console.log("inputMensagem")
}

function desencriptar (){
    var mensagemEncriptada = inputMensagem.value;
    var mensagem = mensagemEncriptada
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ober", "o")
    .replace("ai", "a")
    .replace("ufat", "u");

    inputResultado.value = mensagem;
}


btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;


