<script setup lang="ts">
    import {userStore} from '../store'
    import { useRouter } from 'vue-router';
    import {ref} from 'vue'

    const router = useRouter()
    const isChecked = ref(false)

    const userData = userStore()
    function handleCheck(){
        return isChecked.value = !isChecked.value
    }
    function handleSubmit(event: Event){
        const newForm = new FormData(event.target as HTMLFormElement)
        const userName = newForm.get('userName') as string
        const password = newForm.get('password') as string

        const user = userData.users.find(user => user.userName === userName)
        if (user){
             if (password === user.password)
             {
                router.push({name: 'dashboard', params:{name: `${user.userName}`}})
             }
             else{
                alert("Incorrect Password")
             }
        }
    }
</script>

<template>
    <div class="loginContainer">
        <h1>Budget Tracker</h1>
        <form @submit="handleSubmit">
            <input type="text" placeholder="Username" name="userName">
            <input :type="isChecked ? 'text': 'password'" placeholder="Password" name="password">
            <label for="password">show password <input type="checkbox" @click="handleCheck" /></label>
            <button type="submit">Login</button>
        </form>
        <p>Don't have account yet? <a href="/signup">Sign up</a></p>
    </div>
</template>

<style scoped>
.loginContainer{
    width: 300px;
    height: 320px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    background-color: #9F9CA7;
    border-radius: 15px;
    overflow: hidden;
}
h1{
    margin: 30px;
    color: #E3F56F;
}
form{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    box-sizing: border-box;
}
form>input{
    width: 230px;
    padding: .7rem;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    color: #3F3E41;
}
form>button{
    margin-top: 10px;
    padding: .7rem;
    border-radius: 8px;
    border: none;
    background-color: #8255E4;
    color: #fff;
    box-sizing: border-box;
}
label{
    margin: 2px;
    font-size: 12px;
    width: 100%;
    color: #fff;
    display: flex;
    gap: 5px;
}
label>input{
    font-size: 10px;
}
p{
    font-size: 13px;
    margin-top: 15px;
    margin-bottom: 10px;
    color: #fff;
}
p>a{
    text-decoration: none;
    color: #8255E4;
}
</style>