// 

let campoTexto = document.getElementById('campoTexto');
let botao = document.getElementById('pesquisar');
let digitacaoUser = "";
let informacaoUser = document.getElementById('layout');
let criaRepositorio = document.getElementById('repositorios');

botao.addEventListener("click",()=> {
    digitacaoUser = campoTexto.value;
    if(digitacaoUser != ""){
        ControllerReq.geraUsuario();
        ControllerRepos.geraRepositorio();  
    }else{
        alert("Campo vazio");
    }
});


