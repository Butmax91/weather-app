<template>
    <div class="cont">
       <!-- <button @click="doe" v-if="!getWeather">do</button>-->
        <TodayWeather/>
        <WeekWether/>

    </div>
</template>
<script>
    import TodayWeather from './TodayWeather.vue'
    import WeekWether from './WeekWether.vue'
    export default {
        components : {
            TodayWeather,
            WeekWether
        },
        data(){
            return {

            }
        },
        computed : {
            getWeather(){
                return this.$store.getters.getWeather
            },
            getImg(){
                return this.$store.getters.getImg
            }
        },
        methods : {
            doe(){
                this.$store.dispatch('getWeather')
            }
        }
    }

</script>
<style lang="scss" scoped>
    table {
        border:1px solid black;
        border-collapse: collapse;
        margin: 10px;
        td{
            border:1px solid black;
        }
    }
</style>