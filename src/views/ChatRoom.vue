<template>
  <div class="container">
    <NavBar></NavBar>
  <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import { watch } from 'vue';
import NavBar from '../components/NavBar'
import NewChatForm from "@/components/NewChatForm"
import getUser from '@/composable/getUser';
import { useRouter } from 'vue-router';
export default {
  components: { NavBar, NewChatForm },
  setup(){
    let {user} = getUser()
    let router = useRouter()

    watch(user,()=>{
      if(!user.value){
        router.push("/")
      }
    })
  }

}
</script>

<style>

</style>