//classe responsável por montar o layout

class ViewGit {
    constructor(){
        throw new Error("Não há necessidade de instância")
    }
    static paginaUsuario(objeto){ //criando o método static
            return `<img src = "${objeto.foto}" id="foto">
                    <div><h2 id="nomeUser">${objeto.nomeUsuario}</h2></div>
                    <div><p id="linkPerfil">${objeto.repositorio}</p></div>`;
    }
}