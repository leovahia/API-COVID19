class ModelCovid{

    constructor(state, confirmedCases, deathCases){

        this._state = state,
        this._confirmed = confirmedCases,
        this._death = deathCases
    };

    get covid(){

        return {
        
            stateSearch: this._state,
            confirmedSite: this._confirmed,
            deathSite: this._death
        };

    };

};


/* https://github.com/marketplace/actions/covid-19-stats-timeseries */