<script setup lang="ts">
    import type { Category } from '../utils/types';
    import Option from './Option.vue';

    const {options} = defineProps<Category>()
    console.log(options.values)
</script>
<template>
    <div v-for="option in options">
        <Option 
            :name="option.name" 
            :portfolios="option.portfolios"
        />
    </div>
</template>

<style scoped>

</style>