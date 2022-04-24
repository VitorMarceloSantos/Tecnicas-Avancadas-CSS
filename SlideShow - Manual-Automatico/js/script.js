var counter = 1; //o contador recebe 1, que equivale ao 1° Slide
setInterval(function(){ //Função anônima, não necessita ser chamada pelo HTML
    document.getElementById("radio" + counter).checked = true; //utiliza o método de busca DOM, para receber a localização do label e o referido id, cada vez que a função é executada é como se estivesse marcado manualmente o input(.checked = true)
    counter ++;
    if(counter > 4){ //quando o contador chegar em 4(numero de slides) ele voltará para o 1° slide(counter = 1)
        counter = 1;
    }
}, 4000) //A cada 4 segundos será executada a função( e o slide será alterado)