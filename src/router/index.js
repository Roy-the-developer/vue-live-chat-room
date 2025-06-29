import Welcome from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '@/views/ChatRoom.vue'
import { auth } from '@/firebase/config'
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter(to,from,next){
      let user = auth.currentUser
      if(!user){
        next()
      }else{
        next({name:"Chatroom"})
      }
    }
  },
  {
    path:"/chatroom",
    name:"Chatroom",
    component:ChatRoom,
    beforeEnter(to,from,next){
      let user = auth.currentUser
      if(user){
        next()
      }else{
        next({name:"Welcome"})
      }
    }
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
