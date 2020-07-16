//view repositório

class ViewRepos {
    constructor(){
        throw new Error("Não há necessidade de instância")
    }
    static paginaRepositorio(objeto){ //criando o método static
            return `<li>${objeto.nomeRepositorio}</li>`;
    }
}