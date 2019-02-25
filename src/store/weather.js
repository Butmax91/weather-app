
export default{
    state: {
        city: '',
        weather : null,
        resultWeather : {
            city : '',
            country: '',
            weather: {
                icon: '',
                text: '',
            },
            temperature:{
                _C: '',
                _F: '',
            },
            description:{
                humidity: '',
                pressure: '',
                windSpeed: '',
                windDirection : ''
            },
            forecast : []

        },

    },
    getters : {
        getWeather: (state) => state.resultWeather,
        getCity : (state) =>state.city
    },
    mutations : {
        setWeather :(state,data)=>state.weather = data,
        setResultWeather : (state,data)=>{
            state.resultWeather = {};
            state.resultWeather.city = data.location.name;
            state.resultWeather.country = data.location.country;
            state.resultWeather.weather = {};
            state.resultWeather.weather.icon = data.current.condition.icon;
            state.resultWeather.weather.text = data.current.condition.text;
            state.resultWeather.temperature = {};
            state.resultWeather.temperature._C = data.current.temp_c;
            state.resultWeather.temperature._F = data.current.temp_f;
            state.resultWeather.description ={};
            state.resultWeather.description.humidity = data.current.humidity;
            state.resultWeather.description.pressure = data.current.pressure_mb;
            state.resultWeather.description.windSpeed = data.current.wind_kph;
            state.resultWeather.description.windDirection = data.current.wind_degree;
            state.resultWeather.forecast = [];

            data.forecast.forecastday.forEach((item)=>{
                const forecastData = {};
                forecastData.condition = item.day.condition;
                forecastData.maxTempC = item.day.maxtemp_c;
                forecastData.maxTempF = item.day.maxtemp_f;
                forecastData.minTempC = item.day.mintemp_c;
                forecastData.minTempF = item.day.mintemp_f;
                forecastData.date = {};
                forecastData.date.day = new Date(item.date).toString().substr(0,3);
                forecastData.date.dat = new Date(item.date).getDate();

                state.resultWeather.forecast.push(forecastData);

            });
        },
        setCity : (state,data) => {
            state.city = data
        }
    },
    actions  :{
         getWeather({commit,state}){
            let city = state.city ? state.city : 'kiev';
            fetch(`http://api.apixu.com/v1/forecast.json?key=1825545db3244219915115524193001&q=${city}&days=4`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    commit('setWeather',data);
                    commit('setResultWeather',data);
                })
                .catch(error => console.error(error))
        }
    },



}