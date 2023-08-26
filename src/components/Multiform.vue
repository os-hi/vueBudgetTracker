<script setup lang="ts">
    import Income from './Income.vue'
    import Household from './Household.vue'
    import Living from './LivingCost.vue'
    import Finance from './Finance.vue'
    import Family from './Family.vue'
    import Travel from './Travel.vue'
    import Liesure from './Liesure.vue'
    import {ref} from 'vue'

    const currentTab = ref('Income')

    const tabs = {
        Income,
        Household,
        Living,
        Finance,
        Family,
        Travel,
        Liesure
    }
</script>

<template>
    <div class="demo">
      <div class="buttons">
        <button
              v-for="(_, tab) in tabs" 
              :key="tab" 
              :class="['tab-button', {active: currentTab === tab}]"
              @click="currentTab = tab"
          >
          {{ tab }}
      </button>
      </div>
      <KeepAlive>
          <component :is="tabs[currentTab]" class="tab"></component>
      </KeepAlive>
    
    </div>
</template>
<style scoped>
.demo {
  border-radius: 2px;
  padding: 20px;
  user-select: none;
  overflow-x: auto;
}
.buttons{
  width: 100%;
  height: 40px;
  padding-left: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  box-sizing: border-box;
}
.tab-button {
  padding: 6px 10px;
  color: #fff;
  opacity: 0.5;
  border: none;
  cursor: pointer;
  background: #303030;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  border-bottom: 1px solid #8255E4;
  opacity: 1;
}
.tab-button.active {
  font-weight: bold;
  color: #BFA7EB;
  border-bottom: 2px solid #8255E4;
  opacity: 1;
}
.tab {
  padding: 10px;
}

.next{
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid white;
}
.next>button{
  padding: 8px;
  background-color: #8255E4;
  color: white;
  border-radius: 5px;
}
</style>