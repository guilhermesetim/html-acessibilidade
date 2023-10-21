const sectionMudarTema = document.querySelector('body')

//Altera a cor de fundo do texto
let lightMode = true;
document.querySelector('#troca-tema').addEventListener('click', alterarTema);

function alterarTema()
{
    if(lightMode) {
        sectionMudarTema.style.color = 'white';
        sectionMudarTema.style.backgroundColor = 'black';
    }
    else {
        sectionMudarTema.style.color = 'black';
        sectionMudarTema.style.backgroundColor = 'white';
    }
    lightMode = !lightMode;
}

tamanhoFonte = 18;

document.querySelector('#aumenta-fonte').addEventListener('click', aumentarFonte);
function aumentarFonte(){
    tamanhoFonte += 6;
    document.querySelector(".altera-fonte").style.fontSize= `${tamanhoFonte}px`
}

document.querySelector('#diminui-fonte').addEventListener('click', diminuirFonte);
function diminuirFonte(){
    tamanhoFonte -= 6;
    document.querySelector(".altera-fonte").style.fontSize= `${tamanhoFonte}px`
}