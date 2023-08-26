<script setup lang="ts">

// TODO: transfer the arrays into the store/database
    import {ref, watch} from 'vue'

    const isPayClicked = ref(false)
    const isOtherClicked = ref(false)
    const isAddClicked = ref(false)
    
    const totalIncome = ref(0)
    const salary = ref(0)
    const business = ref(0)
    const savings = ref(0)
    const board = ref(0)

    const salarySelect = ref('perMonth')
    const businessSelect = ref('perMonth')
    const savingsSelect = ref('perMonth')
    const boardSelect = ref('perMonth')
    

    // arary of objects
    let payOptions = [
        {name: 'salary', label: 'Salary(after tax)', select:salarySelect , state: salary },
        {name: 'business', label: 'Self-employment', select: businessSelect, state: business}, 
    ]
    const otherOptions = [
        { label: 'Savings & Investments', select: savingsSelect, state: savings },
        { label: 'Board & Rent', select: boardSelect,  state: board},
    ]
    const additionalOptions = [
        { label: 'Additional Income', select: 'custom1Select',  state: salary },
        { label: 'Additional Income', select: 'custom2Select', state: salary },
    ]
    const options = [
        { value: 'perDay', text: 'per day'},
        { value: 'perWeek', text: 'per week'},
        { value: 'perMonth', text: 'per month'},
        { value: 'perYear', text: 'per year'}
    ]

    // functions ahead
    function toggle(prop: any){
        eval(`${prop}.value = !${prop}.value`)
    }
    function handleSelect(select: any, state: any){
        let recurring = select.value
        if(recurring === 'perDay'){
            totalIncome.value *=   30
        }
        else if (recurring ==='perWeek'){
            totalIncome.value *= 4
        }
        else if (recurring ==='perYear'){
            totalIncome.value = Math.round(salary.value / 12)
        }
        else{
            state.value = state.value
        }  
    }
    //totalIncome = salary + business + savings + board
    // watchers ahead
    watch(salary, (newValue) =>{
        salary.value = newValue
        totalIncome.value = salary.value + business.value
    })
    watch(business, newValue =>{
        business.value = newValue 
        totalIncome.value = salary.value + business.value
    })
    watch(savings, newValue =>{
        savings.value = newValue 
        totalIncome.value = savings.value + board.value
        })
    watch(board, newValue =>{
        board.value = newValue 
        totalIncome.value = salary.value + board.value
    })
   
</script>

<template>
        <div class="container">
            <hr>
            <div class="choices" @click="toggle('isPayClicked')"><h3>Pay</h3></div>
            <div class="tag" v-if="isPayClicked">
                <div class="texts">
                    <h4 v-for='option in payOptions'>{{ option.label }}</h4>
                </div>
                <div class="inputs">
                    <div class="option" v-for="option in payOptions">
                        <input type="number" placeholder="0.00" v-model="option.state.value">
                        <select v-model="option.select.value" @change="handleSelect(option.select, option.state)">
                            <option v-for="option in options" :value="option.value">{{option.text}}</option> 
                        </select>
                    </div>  
                </div>  
            </div>
            <hr>
            <div class="choices"  @click="toggle('isOtherClicked')"><h3>Other Income</h3></div>
            <div class="tag" v-if="isOtherClicked">
                <div class="texts">
                    <h4 v-for='option in otherOptions'>{{ option.label }}</h4>
                </div>
                <div class="inputs">
                    <div class="option" v-for="option in otherOptions">
                        <input type="number" placeholder="0.00" v-model="option.state.value">
                        <select v-model="option.select.value" @change="handleSelect(option.select, option.state)">
                            <option v-for="option in options" :value="option.value">{{option.text}}</option>  
                        </select>
                    </div> 
                </div>
            </div>
            <hr>
            <div class="choices"  @click="toggle('isAddClicked')"><h3>Additional Income</h3></div>
            <div class="tag" v-if="isAddClicked">
                <div class="texts">
                    <input v-for='option in additionalOptions' type="text" :placeholder="option.label">
                </div>
                <div class="inputs">
                    <div class="option" v-for="option in additionalOptions">
                        <input type="number" placeholder="0.00">
                        <select v-model="option.select">
                            <option v-for="option in options" :value="option.value">{{option.text}}</option>
                        </select>
                    </div> 
                </div>
            </div>
            <hr class="last">
            <div class="total">
                <label for="total">Total Income</label>
                <p>${{ totalIncome }}</p>
                <h4>per month</h4>
            </div> 
        </div>        
</template>

<style scoped>
.container{
    margin-top: 15px;
    height: 450px;
    background-color: #303030;
    padding: 25px;
}
.choices{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
}
h3{
    color: #8255E4;
}
h4{
    color: #fff;
    font-weight: lighter;
}
hr{
    width: 100%;
    border: 1px solid white;
}
.tag{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 25px;
    box-sizing: border-box;
}
.inputs{
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}
.texts{
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}
.texts>input{
    width: 170px;
    padding: 5px;
    color: #fff;
    background: #3F3E41;
    border-radius: 5px;
    border: none;
}
.option{
    display: flex;
    justify-content: end;
    gap: 5px;
}
.option>input{
    width: 60px;
    padding: 5px;
    color: #fff;
    background: #3F3E41;
    border-radius: 5px;
    border: none;
}
.option>select{
    width: 120px;
    padding: 5px;
    color: #fff;
    background: #3F3E41;
    border: none;
    border-radius: 5px;
}
.last{
    margin-bottom: 280px;
}
.total{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
}
.total>label,.total>h4{
    color: #8255E4;
}
.total>label{
    font-size: 20px;
}
.total>p{
    color: #BFA7EB;
    font-size: 23px;
}
</style>