function calc(valor,marcado){

    //entrada
    vfrete = Number(document.getElementById('vfrete').value);
    vdesenho = Number(document.getElementById('vdesenho').value);
    vcorpo = Number(document.getElementById('vcorpo').value);
    varte = Number(document.getElementById('varte').value);

    //processamento
    total = vfrete + vdesenho + vcorpo + varte;


    //saída
    document.getElementById('total').value = total;
}

function calcFrete(valor){
 
    document.getElementById('vfrete').value = valor;
    calc();

}

function calcArte(valor){
 
    document.getElementById('varte').value = valor;
    calc();

}

function calcDesenho(valor){
 
    document.getElementById('vdesenho').value = valor;
    calc();

}

function calcCorpo(valor){
 
    document.getElementById('vcorpo').value = valor;
    calc();

}

function finalizar(){
         alert("Obrigada pelo pedido ^.^")
}