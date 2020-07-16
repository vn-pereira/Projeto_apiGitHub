//requisição para puxar os repositórios Git//

class ControllerRepos{
    constructor(){
        throw new Error("Não há necessidade de instância")
    }
    static geraRepositorio(){
        let requisicao2 = new XMLHttpRequest(); // criando o obj e gerando requisição
        requisicao2.open("GET",`https://api.github.com/users/${digitacaoUser}/repos`);
        //console.log("oi oi oi");

        requisicao2.addEventListener("load", ()=> {
            if(requisicao2.status == 200){ 
                let respostaRepos = JSON.parse(requisicao2.responseText);
                
                for (let i of respostaRepos){
                    let montaRepos = new ModelRepos(i.name, i.html_url); //pegando os repositórios da API
                    console.log(i.html_url);
                    criaRepositorio.innerHTML+= ViewRepos.paginaRepositorio(montaRepos.repositorioGit());
                }              
            }  
        });
        requisicao2.send();
    }
}
   