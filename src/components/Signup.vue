<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Sign up</button>
    </form>
   
  </div>
</template>

<script>
import { auth } from '@/firebase/config';
import { ref } from 'vue';

export default {
  setup(){
    let displayName = ref("")
    let email = ref("")
    let password = ref("")
    let error = ref(null)
    let signUp =async()=>{
      try{
        let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
        if(!res){
          throw new Error("Could not create user")
        }
        res.user.updateProfile({displayName:displayName.value})
        console.log(res.user);
      }catch(err){
        error.value =err.message
      }
    }
    return {error,displayName,email,password,signUp}
  }
}
</script>

<style>

</style>