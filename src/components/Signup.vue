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
import useSignup from '@/composable/useSignup';
import { ref } from 'vue';

export default {
  setup(){
    let displayName = ref("")
    let email = ref("")
    let password = ref("")
    

    let {error,creatAccount}= useSignup()
    let signUp =async()=>{
      let res= await creatAccount(email.value,password.value,displayName.value)
      console.log(res.user);
    }
    return {error,displayName,email,password,signUp}
  }
}
</script>

<style>

</style>