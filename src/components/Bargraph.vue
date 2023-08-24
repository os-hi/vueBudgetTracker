<script setup lang="ts">
  import { ref,  } from 'vue';
  
  // Define interface for category object
  interface Category {
    name: string,
    amount: number,
    percentage: number
  }
      // Initialize reactive state variables
      const income = ref(0);
      const food = ref(0)
      const foodPercentage = ref(0)
    //   const travel = ref(0)
    //   const bills = ref(0)
    //   const self = ref(0)
      
    //barGraph based on income 

    //totalIncome = 10 000
    //foodExpense = 2 000
    //travelExpense = 3 000
    //billsExpense = 2 500
    //selfExpense = 2 500

    const categories = ref<Category[]>([])
      
    //get the percentage of each category by dividing it to the total income and multiply by 100
    //ex: foodPercentage = (totalIncome / foodExpense) * 100 => 20%
    function calculateSubmit(){
        foodPercentage.value = (income.value / food.value) * 100
        console.log(foodPercentage.value = (food.value / income.value ) * 100)
        categories.value.push({name:'food',amount:food.value,percentage:foodPercentage.value})
    }
  </script>

<template>
    <div class="container">
        <form @submit.prevent="calculateSubmit">
            <input type="number" placeholder="total income" v-model="income" name="income">
            <input type="number" placeholder="food" v-model="food" name="food">
            <!-- <input type="number" placeholder="travel " v-model="travel" name="travel">
            <input type="number" placeholder="bills " v-model="bills" name="bills">
            <input type="number" placeholder="self" v-model="self" name="self"> -->
            <button type="submit">submit</button>
        </form>
        <div>Total Income: {{ income }}</div>
        <div v-for="category in categories"  class="bar">
            <div class="bar-label">{{ category.name }}</div>
            <div :style="{ width: category.percentage + '%' }" class="bar-fill"></div>
            <div class="bar-percentage">{{ category.percentage }}%</div>
        </div>
    </div>
  </template>
  
<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
form{
    display: flex;
    flex-direction: column;
}
  .bar {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }
  
  .bar-label {
    width: 120px;
  }
  
  .bar-fill {
    height: 20px;
    background-color: #3498db;
  }
  
  .bar-percentage {
    margin-left: 8px;
  }
  </style>
  