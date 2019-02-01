var getWeather;
export default{
    state: {
        weather : null
    },
    getters : {
        getWeather: (state) => state.weather,
        getImg : (state)=>{
            if (state.weather) {
                if(state.weather.current.condition) {
                    console.log(state.weather.current.condition);
                    return state.weather.current.condition
                }
            }
            else return false
        }
    },
    mutations : {
        setWeather :(state,data)=>state.weather = data
    },
    actions  :{
        async getWeather({commit,state},data){
            fetch("http://api.apixu.com/v1/current.json?key=1825545db3244219915115524193001&q=34.4547,30.5238")
                .then(response => response.json())
                .then(data => {
                    commit('setWeather',data);
                })
                .catch(error => console.error(error))
        }
    }

}