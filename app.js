document.getElementById('output__final').style.display = 'none';

function substituirVogal(vogalCodificar, substitutoCodificar) {
    while (listaDeLetras.includes(vogalCodificar)) {
        posicao = listaDeLetras.indexOf(vogalCodificar);
        listaDeLetras[posicao] = substitutoCodificar
    }
}

function codificar() {
    let textoParaCodificar = document.getElementById('container__input').value
    listaDeLetras = textoParaCodificar.split('');
    substituirVogal('a', 'ai');
    substituirVogal('e', 'enter');
    substituirVogal('i', 'imes');
    substituirVogal('o', 'ober');
    substituirVogal('u', 'ufat');
    listaDeLetras = listaDeLetras.join('');
    document.getElementById('output__inicial').style.display = 'none';
    document.getElementById('output__final').style.display = 'block';
    document.getElementById('texto__final').value = listaDeLetras;
}

function substituirTexto(substitutoDecodificar, vogalDecodificar) {
    while (textoParaDecodificar.includes(substitutoDecodificar)) {
        textoParaDecodificar = textoParaDecodificar.replace(substitutoDecodificar, vogalDecodificar);
    }
}

function decodificar() {
    textoParaDecodificar = document.getElementById('container__input').value
    substituirTexto ('ai', 'a');
    substituirTexto ('enter', 'e');
    substituirTexto ('imes', 'i');
    substituirTexto ('ober', 'o');
    substituirTexto ('ufat', 'u');
    document.getElementById('output__inicial').style.display = 'none';
    document.getElementById('output__final').style.display = 'block';
    document.getElementById('texto__final').value = textoParaDecodificar;
}

function copiar () {
    let textoCopiado = document.getElementById('texto__final');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy')
}