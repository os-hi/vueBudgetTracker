<script setup lang="ts">
    //TODO: make a layout for select
    //

    import { ref} from 'vue'
    import SelectRecurring from './SelectRecurring.vue'
    let isPayClicked = ref(false)
    let isOtherIncomeClicked = ref(false)
    let isAddIncomeClicked = ref(false)

    const iSalary = ref(0)
    const iBusiness = ref(0)
    const iAdditional = ref(0)
    const fSalary = ref(0)
    const fBusiness = ref(0)
    const fAdditional = ref(0)
    
    const payRecurrent = ref('perDay')
    const businessRecurrent = ref('perDay')
    const addRecurrent = ref('perDay')


    const customAdd = ref('')

    function handlePay(){
        isPayClicked.value = !isPayClicked.value
    }
    function handleOtherIncome(){
        isOtherIncomeClicked.value = !isOtherIncomeClicked.value
    }
    function handleAddIncome(){
        isAddIncomeClicked.value = !isAddIncomeClicked.value
    }
    function calculateTotalIncome(pay, other, add){
        if(payRecurrent.value === 'perDay'){
            fSalary.value = pay
        }
    }
    
  
</script>
<template>
    <SelectRecurring />
     <p>{{ selectedSalary }}</p>
</template>
<template>
    <div class="incomeContainer">
        <div class="optionsContainer">
            <div class="pay">
                <div @click="handlePay">Pay</div>
                    <div v-if="isPayClicked">
                        <div class="salary">Salary
                            <input type="number" placeholder="amount" v-model="iSalary">
                            <select name="select" v-model="payRecurrent">
                                <option value="perDay">per day</option>
                                <option value="perWeek">per week</option>
                                <option value="perMonth">per month</option>
                                <option value="perYear">per year</option>
                            </select>
                        </div>
                    </div>
            </div>
            <div class="otherIncome">
                <div @click="handleOtherIncome">Other income</div>
                    <div v-if="isOtherIncomeClicked">
                        <div class="business">Business
                            <input type="number" placeholder="amount" v-model="iBusiness">
                            <select name="select" @change="handleOtherSelect($event)">
                                <option value="perDay">per day</option>
                                <option value="perWeek">per week</option>
                                <option value="perMonth">per month</option>
                                <option value="perYear">per year</option>
                            </select>
                        </div>
                    </div>
            </div>
            <div class="addtionalIncome">
                <div @click="handleAddIncome">Additional income</div>
                    <div v-if="isAddIncomeClicked">
                        <div class="custom">
                            <input type="text" v-model="customAdd">
                            <input type="number" placeholder="amount" v-model="iAdditional">
                            <select name="select" @change="handleAddSelect($event)">
                                    <option value="perDay">per day</option>
                                    <option value="perWeek">per week</option>
                                    <option value="perMonth">per month</option>
                                    <option value="perYear">per year</option>
                            </select>
                        </div>
                    </div>
            </div>
        </div>
        <div class="totalIncome">
            <div>Total Income</div>
            <p>{{ fSalary + fBusiness + fAdditional }}</p>
            <p>per month</p>
        </div>
    </div>
</template>

<style scoped>
.incomeContainer{
    width:  50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #EFF7B1;
}
.optionsContainer{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
    box-sizing: border-box;
}
.totalIncome{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}
.salary{
    width: 100%;
    height: 40px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}
.business{
    width: 100%;
    height: 40px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}
.custom{
    width: 100%;
    height: 40px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}
input{
    width: 70px;
    padding-left: 3px;    
}
select{
    width: 70px;
}
</style>