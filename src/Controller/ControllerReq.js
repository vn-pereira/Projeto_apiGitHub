//requisição XMLHttpRequest API Git

class ControllerReq{
    constructor(){
        throw new Error("Não há necessidade de instância")
    }
    static geraUsuario(){
        let requisicao = new XMLHttpRequest(); // criando o obj e gerando requisição
        requisicao.open("GET",`https://api.github.com/users/${digitacaoUser}`);
        //console.log("oi oi oi");

        requisicao.addEventListener("load", ()=> {
            if(requisicao.status == 200){ 
                let respostaApi = JSON.parse(requisicao.responseText);
                //console.log(respostaApi);
                let montaLogin = new ModelGit (respostaApi.avatar_url, respostaApi.login, respostaApi.repos_url); //pegando os elementos API
                //console.log(ViewGit.paginaUsuario(this.geraUsuario));
                informacaoUser.innerHTML = ViewGit.paginaUsuario(montaLogin.loginUsuario());
            }
            
        });
        requisicao.send();
    }
}
    
    
   


