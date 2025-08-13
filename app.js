let listaNumerosSorteados = [];
let numeroMaximo = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function gerarNumeroAleatorio(){
  
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDentroDaLista = listaNumerosSorteados.length;
    if (quantidadeDentroDaLista == numeroMaximo){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function mensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    mensagem('h1', 'Jogo do número secreto');
    mensagem('p', `Escolha um número de 1 a ${numeroMaximo}`);
}


mensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
  
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let avisoTentativa = `Você acertou com ${tentativas} ${palavraTentativa}`;
       
        mensagem('h1', 'Parabéns!');
        mensagem('p', avisoTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (chute > numeroSecreto){
            mensagem('p', 'O número secreto é menor')
        }else{
            mensagem('p', 'O número secreto é maior')
        }
        tentativas++;
        limparCampo();
    }
}


function limparCampo(){
    chute = document.querySelector ('input');
    chute.value =  '';
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    tentativas = 1;
    limparCampo();

    document.getElementById('reiniciar').setAttribute('disabled', true);
}