<template>
    <form >
            <input type="email" v-model="mail" required>
            <input type="" v-model="password" required>
        <button @click="authUser" :disabled="getLoading">ok</button>
        <button @click="authGoogle" :disabled="getLoading">loginGoogle</button>
        <button @click="authFB" :disabled="getLoading">facebookLogin</button>


    </form>
</template>

<script>
    export default {
        data(){
            return {
                mail: '',
                password: ''
            }
        },
        computed : {

            getError(){
                return this.$store.getters.getError
            },
            getLoading(){
                return this.$store.getters.getLoading
            },
        },
        methods : {
            authUser() {
                this.$store.dispatch('authentificationUser', {mail: this.mail, pass: this.password})
                    .then(()=>{
                        if(!this.getError){
                            this.$router.push('/cabinet')
                        }
                    })
            },
            authGoogle() {
                this.$store.dispatch('googleLogin')
                    .then(()=>{
                        if(!this.getError){
                            this.$router.push('/cabinet')
                        }
                    })
            },
            authFB() {
                this.$store.dispatch('FBlogin')
                    .then(()=>{
                        if(!this.getError){
                            this.$router.push('/cabinet')
                        }
                    })
            },
        }


    }
</script>