<script setup lang="ts">
    import {userStore} from '../store'
    import {faker} from '@faker-js/faker'
    import {User} from '../Database'
    // import {ref} from 'vue'

    const randomId = faker.number.int({min: 3, max: 20})
    const userData = userStore()
    function handleSubmit(event: Event){
        const newForm = new FormData(event.target as HTMLFormElement)
        const userName = newForm.get('userName') as string
        const password = newForm.get('password') as string
        // const confirmPassword = newForm.get('confirmPassword')

        const newUserData: User = {
            id: randomId,
            userName,
            password,
            role: 'USER'
        }
        userData.users.push(newUserData)
    }
</script>


<template>
    <div class="signupContainer">
        <div class="banner">
            <h1>Budget Tracker</h1>
            <p>Sign up to gain control over your finances
            and unlock a world of budgeting insights.</p>
        </div>
        
        <form @submit="handleSubmit">
            <input type="text" placeholder="Username" name="userName">
            <input type="password" placeholder="Password" name="password">
            <input type="password" placeholder="Confirm password" name="confirmPassword">
            <button type="submit">Sign up</button>
        </form>
        <p>Already have an account? <a href="/">Login</a></p>
    </div>
</template>


<style scoped>
.signupContainer{
    width: 300px;
    height: 350px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    background-color: #9F9CA7;
    border-radius: 15px;
    overflow: hidden;
}
.banner{
    margin: 30px 30px 5px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.banner>p{
    margin: 10px 3px 10px 3px;
    color: #EFF7B1;
    font-size: .7rem;
    text-align: center;
}
form{
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
p{
    margin: 10px;
    font-size: 12px;
    color: #fff;
}
p>a{
    text-decoration: none;
    color: #8255E4;
}
</style>