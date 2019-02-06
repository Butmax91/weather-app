<template>
    <div class="weather col-sm-12 col-md-8 col-lg-6 col-xl-4 m-auto ">
        <form class="weather-form d-flex flex-row justify-content-center">
            <input type="text" class="mr-1" placeholder="input your city" v-model="getCity">
            <button @click.prevent="getData">Get weather</button>
        </form>
        <div class="current text-center">
            <div class="img text-center">
                <img :src="getWeater.weather.icon" :alt="getWeater.weather.text">
            </div>
            <div class="location text-center">{{getWeater.city}}, {{getWeater.country}}</div>
            <div class="description text-center">Seems to be {{getWeater.weather.text}}</div>
            <div class="temperature text-center">{{getWeater.temperature._C}} &deg;C</div>
            <div class="info col-sm-12 col-md-8 d-flex flex-wrap justify-content-around m-auto">
                <div class="info-humidity col-6 text-justify mb-3 pr-0"><img src="../../assets/icons/humidity.svg" alt="" width="30px"> {{getWeater.description.humidity}}%</div>
                <div class="info-pressure col-6  text-left pr-0"><img src="../../assets/icons/manometer.svg" alt="" width="30px"> {{getWeater.description.pressure}} hPa</div>
                <div class="info-windSpeed col-6  text-justify pr-0"><img src="../../assets/icons/windsock.svg" alt="" width="30px"> {{getWeater.description.windSpeed}} km/h</div>
                <div class="info-windDirection col-6 text-justify pr-0"><img src="../../assets/icons/compass.svg" alt="" width="30px">  {{getWeater.description.windDirection}} &deg;</div>
            </div>
        </div>
        <div class="forecast">
            <p class="forecast-head text-center">4 day forecast</p>
            <div class="forecast-container d-flex flex-row justify-content-around">
                <div class="forecast-item d-flex flex-column  text-center" v-for="item in getWeater.forecast">
                    <div class="forecast-item-maxTemperature">{{item.maxTempC}}&deg;C</div>
                    <div class="forecast-item-img"><img :src="item.condition.icon" :alt="item.condition.text"></div>
                    <div class="forecast-item-minTemperature">{{item.minTempC}}&deg;C</div>
                    <div class="forecast-item-day">{{item.date.day}} {{item.date.dat}}</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

    export default {
        beforeCreate(){
            this.$store.dispatch('getWeather')
        },
        computed : {
            getWeater() {
                return this.$store.getters.getWeather
            },
            getCity :{
                get(){
                    return this.$store.getters.getCity
                },
                set(val){
                    this.$store.commit('setCity',val)
                }
            }
        },
        methods : {
            getData(){
                this.$store.dispatch('getWeather')
            }
        }
    }


</script>
<style lang="scss" scoped>

    .weather{
        border:1px solid black;
        border-radius: 5px;
        padding: 30px 0;
        background-image: linear-gradient(to right, #50154e,#c94b4b);
        color:white;
    }
    .weather-form input,button{
        padding: 0 5px;
        font-size: 12px;
        outline: none;

    }
    .weather-form button{
        border:1px solid white;
        color:white;
        background: none;
        cursor: pointer;
    }
    .current{
        .img{
            margin: 20px 0;
        }
        .location{
            margin: 20px 0 10px;
        }
        .description{
            margin: 0px 0px 20px;
        }
        .temperature{
            width: 100px;
            height: 100px;
            border:1px solid white;
            display: inline-block;
            margin:  0 auto 20px;
            border-radius: 50%;
            line-height: 100px;
            text-align: center;
            font-size: 28px;
        }
    }
    .forecast{
        margin-top: 30px;

    }
</style>