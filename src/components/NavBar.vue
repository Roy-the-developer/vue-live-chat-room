<template>
  <nav class="container">
    <div>
        <p>Hi display name</p>
        <p class="email">Login as email</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '@/composable/useLogout';
export default {
    setup(){
        let {error,logoutAccount}=useLogout()

        let logout =async()=>{
            await logoutAccount()
        }

        return {error,logout}
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