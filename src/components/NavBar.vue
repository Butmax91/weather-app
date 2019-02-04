<template>
    <nav class="navbar navbar-expand-md ">
        <router-link class="navbar-brand" to="/">Weather App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" v-if="!getUser">
                <router-link to="/authentication">Sign In</router-link>
                <router-link to="/registration">Sign Up</router-link>
            </ul>
            <button  @click.prevent="signOut" v-else >Sign Out</button>

        </div>
    </nav>
</template>
<script>
    import firebase from 'firebase';
    export default {
        methods : {
            signOut(){
                this.$store.dispatch('signOut')
            },
        },
        computed : {
            getUser() {
                return this.$store.getters.getUser
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "~bootstrap/scss/bootstrap";
    nav{
        border-bottom: 1px solid black;
    }
</style>