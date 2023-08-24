<template>
    <div class="parent">
        <homepage>
            <div class="container">
                <About />
                <!-- <Login /> -->
                <Signup />
                <!-- <Bargraph /> -->
                <!-- <Income /> -->
            </div>
        </homepage>
    </div>
        
</template>

<script setup lang="ts">
    import homepage from '../layouts/homepage.vue'
    // import Login from '../components/Login.vue'
    import About from '../components/About.vue'
    import Signup from '../components/Signup.vue' 
    // import Bargraph from '../components/Bargraph.vue';
    // import Income from '../components/Income.vue'
</script>

<style scoped>
.parent{
    position: relative;
    background-color: #3F3E41;
    box-sizing: border-box;
}
.container{
    width: 100%;
    height: 90vh;
    position: absolute;
    background-color: #3F3E41;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
}


</style>