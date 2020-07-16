// model repositório

class ModelRepos {
    constructor(nomeRepositorio){
        this._nomeRepositorio = nomeRepositorio;
    }

    repositorioGit(){
        return {
            nomeRepositorio: this._nomeRepositorio
        };
    };
};