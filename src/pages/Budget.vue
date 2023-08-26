

<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import Category from '../components/Category.vue';
    import { budgetStore, useBudgetStore } from '../store';

    // TODO: make properties reactive
    // TODO: make a basic vue chuchu
    const { Income,Household,Living, message} = budgetStore()
    const {budget} = useBudgetStore()
    const msg = ref('')
    console.log(msg)
    // make computed value
    watch(msg, (newMsg) =>{
        console.log(newMsg)
    })
    const totalComputed = computed(() =>{

        let total = 0
        console.log('reached here')
        console.log(message)
        console.log(budget)
        // get the total amount of income component
        Income.options.every((option)=> {
            option.portfolios.every((portfolio)=>{
                total += portfolio.amount
            })
        })
        Household.options.every((option)=> {
            option.portfolios.every((portfolio)=>{
                total -= portfolio.amount
            })
        })
        Living.options.every((option)=> {
            option.portfolios.every((portfolio)=>{
                total -= portfolio.amount
            })
        })

        return total
    })
</script>

<template>
    <div>
        <!--  -->
        <input type="text" v-model="msg">
        {{ msg }}
    </div>
    <!-- not for loop -->
    <!-- get the index of the budget.options -->
    <!-- ou per category -->
    <div v-for="b in budget">
        <Category :options="b.options" :total="b.total"/>
        <!-- <Category :options="Income.options" :total="Income.total"/>
        <Category :options="Household.options" :total="Household.total"/>
        <Category :options="Living.options" :total="Living.total"/> -->
    </div>
    
</template>



<style scoped>

</style>