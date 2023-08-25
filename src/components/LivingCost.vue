<script setup lang="ts">
    import {ref} from 'vue'

    // TODO: 
    // -transfer these arrays into the store pinia

    const isFoodClicked = ref(false)
    const isWorkClicked = ref(false)
    const isClotheClicked = ref(false)
    const isHealthClicked = ref(false)
    const isAddClicked = ref(false)

    const foodOptions = [
        { label: 'Grocery Shopping', select: 'grocerySelect' },
        { label: 'Takeaways', select: 'takeawaySelect' }
    ]
    const workOptions = [
        { label: 'Lunches & Snacks', select: 'lunchSelect' },
        { label: 'Takeaway coffees etc.', select: 'coffeeSelect' },
        { label: 'Union / Professional fees', select: 'unionSelect' },
    ]
    const clotheOptions = [
        { label: "Children's clothes", select: 'childrenClotheSelect' },
        { label: 'School Uniforn', select: 'schoolUniformSelect' },
        { label: 'Shoes', select: 'shoesSelect' },
        { label: 'Work clothes', select: 'workClotheSelect' },
        { label: 'New clothes for you ', select: 'newClotheSelect' },
        { label: 'Laundry and dry cleaning ', select: 'laundrySelect' },
    ]
    const healthOptions = [
        { label: 'Hairdressing', select: 'hairdressingSelect' },
        { label: 'Beauty treaments', select: 'beautySelect' },
        { label: 'Toiletries', select: 'toiletSelect' },
        { label: 'Eye care', select: 'eyeSelect' },
        { label: 'Dental care', select: 'dentalSelect' },
        { label: 'Prescriptions & medicines', select: 'medicineSelect' }
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
        <div class="choices" @click="toggle('isFoodClicked')"><h3>Food & Drink</h3></div>
        <div class="tag" v-if="isFoodClicked">
            <div class="texts">
                <h4 v-for="option in foodOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in foodOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>  
        </div>
        <hr>
        <div class="choices" @click="toggle('isWorkClicked')"><h3>Work</h3></div>
        <div class="tag" v-if="isWorkClicked">
            <div class="texts">
                <h4 v-for="option in workOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in workOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isClotheClicked')"><h3>Clothes & Snacks</h3></div>
        <div class="tag" v-if="isClotheClicked">
            <div class="texts">
                <h4 v-for="option in clotheOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in clotheOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="choices" @click="toggle('isHealthClicked')"><h3>Health & Beauty</h3></div>
        <div class="tag" v-if="isHealthClicked">
            <div class="texts">
                <h4 v-for="option in healthOptions">{{option.label}}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in healthOptions">
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