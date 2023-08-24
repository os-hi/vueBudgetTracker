<template>
    <div class="container">
        <header>
            <div class="greeting">
                <p>Hello Jake</p>
            </div>
            <div class="totalBudget">
                <p class="total">Total Budget</p>
                <hr>
                <p class="amount">19, 549</p>
            </div>
            <div class="switch"></div>
        </header>
        <slot />
    </div>
    
</template>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    background-color: #222222;
    overflow: hidden;
    position: relative;
}
header{
    width: 100vw;
    height: 90px;
    display: flex;
    justify-content: space-between;
}
.greeting{
    width: 200px;
    border-radius: 0 0 110px 0;
    display: flex;
    align-items: center;
    background-color: #EFF7B1;
}
.greeting>p{
    font-size: 24px;
    margin-left: 20px;
    color: #222222;
}
.totalBudget{
    width: 300px;
    border-radius: 0 0 100px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #404040;

}
.totalBudget>hr{
    width: 200px;
    border: 1px solid white;
}
.total{
    color: #fff;
    font-size: 20px;
}
.amount{
    color: #8255E4;
    font-size: 30px;
}
.switch{
    width: 70px;
    height: 30px;
    border: 1px solid white;
    border-radius: 20px;
    margin-top: 30px;
    margin-right: 20px;
}
</style>