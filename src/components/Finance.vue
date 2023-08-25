<script setup lang="ts">
    import {ref} from 'vue'

    // TODO: 
    // -transfer these arrays into the store pinia

    const isInsuranceClicked = ref(false)
    const isBankingClicked = ref(false)
    const isLoanClicked = ref(false)
    const isSavingsClicked = ref(false)
    const isFutureClicked = ref(false)
    const isAddClicked = ref(false)

    const insuranceOptions = [
        { label: 'Life Insurance', select: 'lifeSelect' },
        { label: 'Income Protection Insurance', select: 'incomeSelect' },
        { label: 'Critical Illness Insurance', select: 'criticalSelect' },
        { label: 'Payment Protection Insurance', select: 'paymentSelect' },
        { label: 'Credit Card Insurance', select: 'creditSelect' },
        { label: 'Health Insurance', select: 'healthSelect' },
        { label: 'Dental Insurance', select: 'dentalSelect' },
    ]
    const bankingOptions = [
        { label: 'Overdraft charges and interest', select: 'lunchSelect' },
        { label: 'Bank account fees', select: 'coffeeSelect' },
        { label: 'Penalties', select: 'unionSelect' },
    ]
    const loanOptions = [
        { label: "Loan repayments", select: 'loanrpSelect' },
        { label: 'Student loan repayments', select: 'studentrpSelect' },
        { label: 'Credit card repayments', select: 'creditrpSelect' },
    ]
    const savingsOptions = [
        { label: 'Regular saving', select: 'regularSelect' },
        { label: 'Lump sum saving', select: 'lumpSelect' },
        { label: 'Buying shares & other investments', select: 'sharesSelect' },
    ]
    const futureOptions = [
        { label: 'Long term care plan', select: 'longtermSelect' },
        { label: 'Funeral plan', select: 'funeralSelect' },
    ]
    const additionalOptions = [
        { label: 'Additional Income', select: 'custom1Select' },
        { label: 'Additional Income', select: 'custom2Select' },
    ]
    const options = [
        { value: 'perDay', text: 'per day'},
        { value: 'perWeek', text: 'per week'},
        { value: 'perMonth', text: 'per month'},
        { value: 'perYear', text: 'per year'}
    ]
    function toggle(prop: any){
        eval(`${prop}.value = !${prop}.value`)
    }
</script>

<template>
    <div class="container">
        <hr>
        <div class="choices" @click="toggle('isInsuranceClicked')"><h3>Insurance</h3></div>
        <div class="tag" v-if="isInsuranceClicked">
            <div class="texts">
                <h4 v-for="option in insuranceOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in insuranceOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>  
        </div>
        <hr>
        <div class="choices" @click="toggle('isBankingClicked')"><h3>Banking</h3></div>
        <div class="tag" v-if="isBankingClicked">
            <div class="texts">
                <h4 v-for="option in bankingOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in bankingOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isLoanClicked')"><h3>Loans & credit</h3></div>
        <div class="tag" v-if="isLoanClicked">
            <div class="texts">
                <h4 v-for="option in loanOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in loanOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isSavingsClicked')"><h3>Savings & investments</h3></div>
        <div class="tag" v-if="isSavingsClicked">
            <div class="texts">
                <h4 v-for="option in savingsOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in savingsOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isFutureClicked')"><h3>Future plans</h3></div>
        <div class="tag" v-if="isFutureClicked">
            <div class="texts">
                <h4 v-for="option in futureOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in futureOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isAddClicked')"><h3>Additional Income</h3></div>
        <div class="tag" v-if="isAddClicked">
            <div class="texts">
                <input v-for="option in additionalOptions" type="text" :placeholder="option.label">
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
        <hr>
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
    gap: 15px;
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

</style>