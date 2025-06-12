<template>
  <div v-if="user">
    <nav class="container">
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">Login as {{ user.email }}</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composable/useLogout';
import getUser from '@/composable/getUser';
export default {
    setup(){
        let {error,logoutAccount}=useLogout()
        let {user} = getUser()
        let logout =async()=>{
            await logoutAccount()
        }


        return {user,error,logout}
    }
}
</script>

<style>
    nav{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        align-items: center;
    }
    nav p{
        margin: 2px auto ;
        font-size: 16px;
        color: #444;
    }
    nav .email{
        font-size: 14px;
        color: #999;
    }
    nav button{
        cursor: pointer;
    }
</style>