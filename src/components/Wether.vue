<template>
    <div class="cont">
        <button @click="doe" v-if="!getWeather">do</button>
        <table v-for="table in getWeather" v-else>
            <tr v-for="(value, key) in table">
                <td>{{key}}</td>
                <td>{{value}}</td>
            </tr>
        </table>
        <br>
        <img :src="getImg.icon" :alt="getImg.text" v-if="getImg">

    </div>
</template>
<script>
    export default {
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
    .cont{
        background: grey;
    }
</style>