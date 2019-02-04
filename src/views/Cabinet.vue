<template>
    <div>
        {{ getUser}}
    </div>
</template>
<script>
    import Weather from '../components/weather/Weather.vue'
    export default {
        computed: {
            getUser() {
                if (this.$store.getters.getUser) {
                    return this.$store.getters.getUser
                } else {
                    this.$router.push('/')
                }
            },
        },
        components : {
            Weather
        }
        }

</script>