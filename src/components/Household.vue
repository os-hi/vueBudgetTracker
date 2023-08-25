<script setup lang="ts">
    import {ref} from 'vue'

    const isMortgageClicked = ref(false)
    const isUtilClicked = ref(false)
    const isAddClicked = ref(false)

    const mortgageOptions = [
        { label: 'Mortgage payment', select: 'mortgageSelect' },
        { label: 'Rent', select: 'rentSelect' }
    ]
    
    const utilitiesOptions = [
        { label: 'Gas', select: 'gasSelect' },
        { label: 'Electricity', select: 'electricitySelect' },
        { label: 'Water', select: 'waterSelect' },
        { label: 'Mobile phones', select: 'mobileSelect' },
        { label: 'Internet / Broadband', select: 'internetSelect' },
        { label: 'Satelite / Digital TV', select: 'sateliteSelect' }
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
        <div class="choices" @click="toggle('isMortgageClicked')"><h3>Mortgage & Rent</h3></div>
        <div class="tag" v-if="isMortgageClicked">
            <div class="texts">
                <h4 v-for="option in mortgageOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in mortgageOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>  
        </div>
        <hr>
        <div class="choices" @click="toggle('isUtilClicked')"><h3>Utilities</h3></div>
        <div class="tag" v-if="isUtilClicked">
            <div class="texts">
                <h4 v-for="option in utilitiesOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in utilitiesOptions">
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