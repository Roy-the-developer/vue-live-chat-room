import Welcome from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '@/views/ChatRoom.vue'
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path:"/chatroom",
    name:"Chatroom",
    component:ChatRoom
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
