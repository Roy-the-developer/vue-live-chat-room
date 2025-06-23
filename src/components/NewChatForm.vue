<template>
    <form >
        <textarea placeholder="Enter new text here" v-model="message" @keypress.enter="handleSubmit"></textarea>
    </form>
</template>

<script>
import getUser from '@/composable/getUser';
import { timestamp } from '@/firebase/config';
import { ref } from 'vue';

export default{
    setup(){
        let {user} = getUser()
        
        let message = ref("")
        let handleSubmit=()=>{
           let chat = {
            message : message.value,
            name : user.value.displayName,
            created_at : timestamp()
           }

           console.log(chat)
           message.value = ""
        }
        return {message, handleSubmit}
    }
}
</script>

<style>
     form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>