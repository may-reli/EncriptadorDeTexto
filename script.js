const textArea = document.querySelector(".message-in");
const textAreaDesencriptado = document.querySelector(".message-out");




//Llaves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function btnEncriptar(){
    var textoEncriptado = encriptar(textArea.value);
    textAreaDesencriptado.value = textoEncriptado;
    textArea.value = "";

    document.querySelector(".contenedor-dibujo").style.display='none'; 
    document.querySelector(".contenedor-desencriptado-1").style.display='none';
    document.querySelector(".contenedor-desencriptado-2").style.display='block';
}

 
function encriptar (stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function btnDesencriptar(){
    var textoEncriptado = desencriptar(textArea.value);
    textAreaDesencriptado.value = textoEncriptado;
    textArea.value = "";
}


function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
           stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
  navigator.clipboard.writeText(textAreaDesencriptado.value);
  alert("Texto Copiado");
}

