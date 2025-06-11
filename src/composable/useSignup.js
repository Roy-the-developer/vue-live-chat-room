import { auth } from "@/firebase/config"
import { ref } from "vue"

let error = ref(null)
let creatAccount=async(email,password,displayName)=>{
    
    try{
        let res = await auth.createUserWithEmailAndPassword(email,password)
        if(!res){
          throw new Error("Could not create user")
        }
        res.user.updateProfile({displayName})
        return res
        }catch(err){
            error.value =err.message
            console.log(err.message);
      }
    
}

let useSignup=()=>{

    return {error,creatAccount}
}

export default useSignup