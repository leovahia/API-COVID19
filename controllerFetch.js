      
    const button = document.getElementById("button-addon2");

    button.addEventListener("click", ()=>{
        
        //pegando os dados do usuário
        const resultCovid = document.getElementById("resultView");
        const state = document.getElementById("state").value.replace(/\s+/g, '-').toLowerCase();
        const viewState = document.getElementById("state").value.toUpperCase();
        const country = document.getElementById("country").value.replace(/\s+/g, '-').toLowerCase();
        const date = document.getElementById("datetime").value;
        const url = `https://xpowery.github.io/covid-api/v1/timeseries-${country}.json`;
     
        //função para coletar os dados vindos do database
        function informationSite(information){

            //codigo para selecionar informações sobre casos confirmados de covid do site
            const searchConfirmed = information.data[state][date][0];

            //codigo para selecionar informações sobre casos de morte por covid do site
            const searchDeath = information.data[state][date][2];

            //organizando os dados vindos do site via Model
            const result = new ModelCovid(
                viewState,
                searchConfirmed,
                searchDeath
            );

            //passando os dados para view
            resultCovid.innerHTML = ViewCovid.view(result.covid);
        };

        //requisição com fetch
        fetch(url, {method: 'GET'})

        //pegando o dado no formato json
        .then(response =>{
            return response.json();
        })

        //codigo que permite pegar a informação do databse e jogar para função que queremos
        .then(informationSearch =>{
            return informationSite(informationSearch);
        })

        .catch(()=>{
           alert("Erro na digitação da solicitação, por favor repita o pedido.")
        });
    });

  //mais informações sobre o banco: https://github.com/marketplace/actions/covid-19-stats-timeseries  
