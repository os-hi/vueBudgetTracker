<script setup lang="ts">
    import {ref} from 'vue'

    // TODO: 
    // -transfer these arrays into the store pinia

    const isChildrenClicked = ref(false)
    const isSchoolClicked = ref(false)
    const isSupportClicked = ref(false)
    const isPetClicked = ref(false)
    const islpFamilyClicked = ref(false)
    const isAddClicked = ref(false)

    const childrenOptions = [
        { label: 'Childcare', select: 'childcareSelect' },
        { label: 'Nappies and baby items', select: 'nappiesSelect' },
        { label: 'Activities & Clubs', select: 'activitiesSelect' },
        { label: 'Toys & Treats', select: 'toysSelect' },
        { label: 'Pocket money', select: 'pocketSelect' },
        { label: 'Babysitting', select: 'babysittingSelect' },
        { label: 'Maintenance or child support', select: 'maintenanceSelect' },
    ]
    const schoolOptions = [
        { label: 'School fees / tuitions', select: 'feesSelect' },
        { label: 'School trips', select: 'tripsSelect' },
        { label: 'School meals', select: 'mealsSelect' },
        { label: 'After-school clubs', select: 'clubsSelect' },
    ]
    const supportOptions = [
        { label: "Support for student children", select: 'supportSelect' },
    ]
    const petsOptions = [
        { label: 'Food', select: 'petfoodSelect' },
        { label: 'Vet bills', select: 'vetSelect' },
    ]
    const loanrepaymentOption = [
        { label: 'Loan repayment to family / friend', select: 'lpFamilySelect' },
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
        <div class="choices" @click="toggle('isChildrenClicked')"><h3>Children</h3></div>
        <div class="tag" v-if="isChildrenClicked">
            <div class="texts">
                <h4 v-for="option in childrenOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in childrenOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>  
        </div>
        <hr>
        <div class="choices" @click="toggle('isSchoolClicked')"><h3>School</h3></div>
        <div class="tag" v-if="isSchoolClicked">
            <div class="texts">
                <h4 v-for="option in schoolOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in schoolOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isSupportClicked')"><h3>Support for student children</h3></div>
        <div class="tag" v-if="isSupportClicked">
            <div class="texts">
                <h4 v-for="option in supportOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in supportOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isPetClicked')"><h3>Pets</h3></div>
        <div class="tag" v-if="isPetClicked">
            <div class="texts">
                <h4 v-for="option in petsOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in petsOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('islpFamilyClicked')"><h3>Loan repayment to family / friend</h3></div>
        <div class="tag" v-if="islpFamilyClicked">
            <div class="texts">
                <h4 v-for="option in loanrepaymentOption">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in loanrepaymentOption">
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