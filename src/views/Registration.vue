
<template>
  <div>
    <input type="text" name="name" v-model="mail"><br>
    <input type="text" name="mail" v-model="password" ><br>
    <button @click="registerUser" :disabled="getLoading" >ok</button>

    {{getUser}}
  </div>
</template>
<script>
  import firebase from 'firebase'

  export  default {
    data(){
      return {
        mail: '',
        password: ''
      }
    },
    computed : {
      getUser(){
        return this.$store.getters.getLoad
      },
      getEror(){
        return this.$store.getters.getError
      },
      getLoading(){
        return this.$store.getters.getLoading
      }
    },
    methods : {
      registerUser() {
        this.$store.dispatch('registerUser', {mail: this.mail, pass: this.password})
                .then(()=>{
                  if(!this.getError){
                    this.$router.push('/cabinet')
                  }
                })
      },
    }
  }

</script>