
export default{
    state: {
        weather : null,
        resultWeather : null
    },
    getters : {
        getWeather: (state) => state.resultWeather,
        getImg : (state)=>{
            if (state.weather) {
                if(state.weather.current.condition) {
                    return state.weather.current.condition
                }
            }
            else return false
        }
    },
    mutations : {
        setWeather :(state,data)=>state.weather = data,
        setResultWeather : (state,data)=>{
            state.resultWeather = {};
            state.resultWeather.city = data.location.name;
            state.resultWeather.date = data.location.localtime;
            state.resultWeather.day = data.current.is_day;
            state.resultWeather.temperature = {};
            state.resultWeather.temperature.fact = data.current.temp_c;
            state.resultWeather.temperature.feelsLike = data.current.feelslike_c;
            state.resultWeather.weather = {};
            state.resultWeather.weather.text = data.current.condition.text;
            state.resultWeather.weather.icon = data.current.condition.icon;
            state.resultWeather.wind = {};
            state.resultWeather.wind.speed = data.current.wind_kph;
            state.resultWeather.wind.direction = data.current.wind_degree;
            console.log( state.resultWeather)

        }
    },
    actions  :{
         getWeather({commit,state}){
            fetch("http://api.apixu.com/v1/forecast.json?key=1825545db3244219915115524193001&q=киев&days=7")
                .then(response => response.json())
                .then(data => {
                    commit('setWeather',data);
                    commit('setResultWeather',data);
                    console.log(data)
                })
                .catch(error => console.error(error))
        }
    }

}