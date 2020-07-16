//view repositório

class ViewRepos {
    constructor(){
        throw new Error("Não há necessidade de instância")
    }
    static paginaRepositorio(objeto){ //criando o método static
            return `<li id="listarepositorio">
                    <p>${objeto.nomeRepositorio}</p>
                    <a href="${objeto.urlrepositorio}"><p>${objeto.urlrepositorio}</p></a>
                </li> `;
    }
}