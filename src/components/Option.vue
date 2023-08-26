<script setup lang="ts">
    import type { Option } from '../utils/types';
    import Portfolio from './Portfolio.vue';
    const {name, portfolios} = defineProps<Option>()
</script>
<template>
    <div>
        <div>{{ name }}</div>
        <div v-for="portfolio in portfolios">
            <Portfolio 
                :name="portfolio.name" 
                :type="portfolio.type" 
                :amount="portfolio.amount" 
                :recurring="portfolio.recurring"
            />
        </div>
    </div>
</template>
<style scoped>

</style>