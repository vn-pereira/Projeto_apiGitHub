// classe login
class ModelGit {
    constructor(foto, nomeUsuario, repositorio){
        this._foto = foto;
        this._nomeUsuario = nomeUsuario;
        this._repositorio = repositorio;
    }

    loginUsuario(){
        return {
            foto: this._foto,
            nomeUsuario: this._nomeUsuario,
            repositorio: this._repositorio,
        };
    };
};