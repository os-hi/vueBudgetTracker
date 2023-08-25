<script setup lang="ts">
    import {ref} from 'vue'

    const isEntertainmentClicked = ref(false)
    const isOneoffsClicked = ref(false)
    const isHolidaysClicked = ref(false)
    const isAddClicked = ref(false)

    const entertainmentOptions = [
        { label: 'Cinema & theatre trips', select: 'cinemaSelect' },
        { label: 'Days out', select: 'dayoutSelect' },
        { label: 'Books, music, films, games etc.', select: 'bookSelect' },
        { label: 'Hobbies', select: 'hobbiesSelect' },
        { label: 'Eating out', select: 'eatingoutSelect' },
        { label: 'Going out for drinks', select: 'goingoutSelect' },
        { label: 'Sport & gym', select: 'gymSelect' },
        { label: 'Lottery & gambling', select: 'lotterySekect' },
    ]
    
    const oneoffsOptions = [
        { label: 'Birthdays', select: 'birthdaySelect' },
        { label: 'Christmas', select: 'christmasSelect' },
        { label: 'Other festivals & celebrations', select: 'festivalSelect' },
        { label: 'Weddings', select: 'weddingSelect' },
    ]
    const holidaysOptions = [
        { label: 'Holidays', select: 'custom1Select' },
        { label: 'Travel insurance', select: 'custom2Select' },
        { label: 'Spending money', select: 'custom2Select' },
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
        <div class="choices" @click="toggle('isEntertainmentClicked')"><h3>Entertainment</h3></div>
        <div class="tag" v-if="isEntertainmentClicked">
            <div class="texts">
                <h4 v-for='option in entertainmentOptions'>{{ option.label }}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in entertainmentOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option> 
                    </select>
                </div>  
            </div>  
        </div>
        <hr>
        <div class="choices"  @click="toggle('isOneoffsClicked')"><h3>One-offs</h3></div>
        <div class="tag" v-if="isOneoffsClicked">
            <div class="texts">
                <h4 v-for='option in oneoffsOptions'>{{ option.label }}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in oneoffsOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
                        <option v-for="option in options" :value="option.value">{{option.text}}</option>  
                    </select>
                </div> 
            </div>
        </div>
        <hr>
        <div class="choices"  @click="toggle('isHolidaysClicked')"><h3>Holidays</h3></div>
        <div class="tag" v-if="isHolidaysClicked">
            <div class="texts">
                <h4 v-for='option in holidaysOptions'>{{ option.label }}</h4>
            </div>
            <div class="inputs">
                <div class="option" v-for="option in holidaysOptions">
                    <input type="number" placeholder="0.00">
                    <select v-model="option.select">
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
        <hr>
    </div>
</template>

<style scoped>
.container{
    margin-top: 15px;
    height: 450px;
    background-color: #303030;
    padding: 10px;
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