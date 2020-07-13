// 

let campoTexto = document.getElementById('campoTexto');
let botao = document.getElementById('pesquisar');
let digitacaoUser = "";

botao.addEventListener("click",()=> {
    digitacaoUser = campoTexto.value;
    if(digitacaoUser != ""){
        ControllerReq.geraUsuario();
    }else{
        alert("Campo vazio");
    }
});


