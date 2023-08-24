<template>
    <div class="window">
        <div class="container">
            <Multiform />
        </div>
    </div>
</template>

<script setup lang="ts">
    import Multiform from '../components/Multiform.vue';
</script>

<style scoped>
.window{
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    box-sizing: border-box;
    overflow: hidden;
}
.container{
    width: 50%;
    height: 70%;
    background-color: #303030;
    border-radius: 10px;
    position: absolute;
}
</style>