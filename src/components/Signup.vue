<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <button>Sign up</button>
    </form>
   
  </div>
</template>

<script>
import useSignup from '@/composable/useSignup';
import { ref } from 'vue';

export default {
  setup(props,context){
    let displayName = ref("")
    let email = ref("")
    let password = ref("")
    

    let {error,createAccount}= useSignup()
    let signUp =async()=>{
      let res= await createAccount(email.value,password.value,displayName.value)
      if(res){
        context.emit("enterChatroom")
      }
    }
    return {error,displayName,email,password,signUp}
  }
}
</script>

<style>

</style>