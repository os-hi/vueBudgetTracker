<script setup lang="ts">
    import dashboard from '../layouts/dashboard.vue'
</script>

<template>
    <dashboard>
        <main>  
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Update</li>
                    </ul>
                </nav>
                <section>
                    <div class="graph">
                        <h1>Expenditure Categories</h1>
                    </div>
                    <aside>
                        <div class="quote">
                            <h1>Quote of the Day</h1>
                            <p>"To get rich, you have to be making money while you're asleep"</p>
                        </div>
                        <div class="todoList">
                            <h1>Todo : Daily</h1>
                        </div>
                    </aside>
                </section>
        </main>
    </dashboard>
</template>

<style scoped>
main{
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
nav{
    width: 5%;
    
    height: 80vh;
    border-radius: 0 120px 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: #404040;
}
ul{
    height: 70vh;
    margin: 70px 0  50px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
ul>li{
    list-style: none;
}
section{
    width: 90%;
    height: 80vh;
    margin-right: 20px;
    border-radius: 80px;
    background-color: #303030;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #303030;
}
.graph{
    width: 850px;
    height: 580px;
    margin: 50px;
    border-radius: 40px;
    border: 1px solid #3F3E41;
    background-color: #3F3E41;
}
.graph>h1{
    margin: 35px;
    font-weight: lighter;
}
.quote{
    margin: 50px 80px;
    width: 400px;
    height: 200px;
    border-radius: 15px;
    border: 1px solid #3F3E41;
    background-color: #3F3E41;
}
aside{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}
.quote>h1{
    font-size: 25px;
    margin: 25px 15px 45px 15px;
    font-weight: lighter;
    text-align: center;
}
.quote>p{
    margin: 20px;
    font-size: 20px;
    text-align: center;
    color: #fff;
}
.todoList{
    margin-bottom: 30px;
    width: 400px;
    height: 350px;
    border: 1px solid #3F3E41;
    border-radius: 15px;
    background-color: #3F3E41;
}
.todoList>h1{
    margin: 15px 15px 15px 25px;
    font-size: 25px;
    font-weight: lighter;
}
</style>



