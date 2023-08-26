<script setup lang="ts">
    import type { Portfolio } from '../utils/types';
    
    let { name, amount, recurring} = defineProps<Portfolio>()

    const options = ['day', 'week',  'month',  'year']
</script>
<template>
    <div>
        <div class="choices">
            <label for="choices">{{ name }}</label>
            <input type="number" :value="amount">
            <select :value="recurring">
                <option v-for="option in options" :value="option">per {{ option }}</option>
            </select>
        </div>
    </div>
</template>
<style scoped>

</style>