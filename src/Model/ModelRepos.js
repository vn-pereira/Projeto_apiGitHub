// model repositório

class ModelRepos {
    constructor(nomeRepositorio, urlrepositorio){
        this._nomeRepositorio = nomeRepositorio;
        this._urlrepositorio = urlrepositorio;
    }

    repositorioGit(){
        return {
            nomeRepositorio: this._nomeRepositorio,
            urlrepositorio: this._urlrepositorio
        };
    };
};