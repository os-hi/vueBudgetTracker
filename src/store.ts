import { defineStore } from 'pinia'
import { Database } from './Database'
import {User} from './Database'
import {ref} from 'vue'

export const userStore = defineStore('userStore', ()=>{
    const users: User[] = Database

    return{users}
})