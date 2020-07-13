//classe responsável por montar o layout

class ViewGit {
    constructor(){
        throw new Error("Não há necessidade de instância")
    }
    static paginaUsuario(objeto){ //criando o método static
            return `<img src = "${objeto.foto}">
                    <div><h2>${objeto.nomeUsuario}</h2></div>
                    <div><p>${objeto.repositorio}</p></div>`;
    }
}