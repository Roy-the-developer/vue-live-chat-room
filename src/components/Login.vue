<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import useLogin from '@/composable/useLogin';
import { ref } from 'vue';

export default {
  setup(props,context){
    let email = ref("")
    let password = ref("")
    let {error,loginAccount} = useLogin()

    let login =async()=>{
      let res = await loginAccount(email.value,password.value)
      if(res){
        context.emit("enterChatroom")
      }
    }
    
    return {email,password,login,error}
  }
}
</script>

<style>

</style>