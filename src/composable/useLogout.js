import { auth } from "@/firebase/config";
import { ref } from "vue"

let error = ref(null)
let logoutAccount=async()=>{
            try{
                await auth.signOut()
                console.log("user logged out");
            }catch(err){
                error.value=err.message
                console.log(err.message);
            }
        
}
let useLogout=()=>{
    return {error,logoutAccount}
}

export default useLogout