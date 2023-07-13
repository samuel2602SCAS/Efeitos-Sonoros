

function tocaSom (seletorAudio) { 
    const elemento = document.querySelector(seletorAudio)

    console.log(elemento)
    console.log(elemento.localName)
    if (elemento === null || elemento.localName != 'audio') {
        alert('Elemento não encontrado ou Não é um aúdio');
    } else {
        elemento.play();
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
        
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' && evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}