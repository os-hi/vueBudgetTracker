<script setup lang="ts">
    import {ref} from 'vue'

    const isPayClicked = ref(false)
    const isOtherClicked = ref(false)
    const isAddClicked = ref(false)

    const salarySelect = ref('perMonth')
    const businessSelect = ref ('perMonth')
    const savingSelect = ref('perMonth')
    const boardSelect = ref('perMonth')
    const custom1Select = ref('perMonth')
    const custom2Select = ref ('perMonth')
    function handlePay(){
        isPayClicked.value= !isPayClicked.value;
    }
    function handleOther(){
        isOtherClicked.value = !isOtherClicked.value
    }
    function handleAdd(){
        isAddClicked.value = !isAddClicked.value
    }
</script>

<template>
    <div class="container">
        <hr>
        <div class="choices" @click="handlePay">
            <h3>Pay</h3>
        </div>
        <div class="tag" v-if="isPayClicked">
            <div class="texts">
                <h4>Salary(after tax)</h4>
                <h4>Self-employment</h4>
            </div>
            <div class="inputs">
                <div class="option">
                    <input type="number" placeholder="0.00">
                    <select v-model="salarySelect">
                        <option value="perDay">per day</option>
                        <option value="perWeek">per week</option>
                        <option value="perMonth">per month</option>
                        <option value="perYear">per year</option>
                    </select>
                </div>
                <div class="option">
                    <input type="number" placeholder="0.00">
                    <select v-model="businessSelect">
                        <option value="perDay">per day</option>
                        <option value="perWeek">per week</option>
                        <option value="perMonth">per month</option>
                        <option value="perYear">per year</option>
                    </select>
                </div>
            </div>  
        </div>
        <hr>
        <div class="choices" @click="handleOther"><h3>Other Income</h3></div>
        <div class="tag" v-if="isOtherClicked">
            <div class="texts">
                <h4>Savings & Investments</h4>
                <h4>Board & Rent</h4>
            </div>
            <div class="inputs">
                <div class="option">
                    <input type="number" placeholder="0.00">
                    <select v-model="savingSelect">
                        <option value="perDay">per day</option>
                        <option value="perWeek">per week</option>
                        <option value="perMonth">per month</option>
                        <option value="perYear">per year</option>
                    </select>
                </div>
                <div class="option">
                    <input type="number" placeholder="0.00">
                    <select v-model="boardSelect">
                        <option value="perDay">per day</option>
                        <option value="perWeek">per week</option>
                        <option value="perMonth">per month</option>
                        <option value="perYear">per year</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="handleAdd"><h3>Additional Income</h3></div>
        <div class="tag" v-if="isAddClicked">
            <div class="texts">
                <input type="text" placeholder="Name additional income">
                <input type="text" placeholder="Name additional income">
            </div>
            <div class="inputs">
                <div class="option">
                    <input type="number" placeholder="0.00">
                    <select v-model="custom1Select">
                        <option value="perDay">per day</option>
                        <option value="perWeek">per week</option>
                        <option value="perMonth">per month</option>
                        <option value="perYear">per year</option>
                    </select>
                </div>
                <div class="option">
                    <input type="number" placeholder="0.00">
                    <select v-model="custom2Select">
                        <option value="perDay">per day</option>
                        <option value="perWeek">per week</option>
                        <option value="perMonth">per month</option>
                        <option value="perYear">per year</option>
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

</style>