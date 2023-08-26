import { defineStore } from 'pinia'
import { Database } from './Database'
import {User} from './Database'
import { Category, Option } from './utils/types'
import {ref} from 'vue'

export const userStore = defineStore('userStore', ()=>{
    const users: User[] = Database

    return{users}
})

export const useIncome = defineStore('incomeStore', ()=>{
    
})

export const budgetStore = defineStore('budget',()=>{
    const message = ref('')
    const budget: {total: number} = {
        total: 0
    }
    
    const Income: Category ={
        total: 0,
        options: [
            {name:'Pay', portfolios: [
                {
                    type: 'assets',
                    name: 'Salary(after tax)',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Self-employment',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Other Income', portfolios: [
                {
                    type: 'assets',
                    name: 'Savings & Investments',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Board & Rent',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Additional Income', portfolios: [
                {
                    type: 'assets',
                    name: 'Add item',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Add item',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
        ]  
    }
    const Household: Category ={
        total: 0,
        options: [
            {name:'Mortgage & Rent', portfolios: [
                {
                    type: 'assets',
                    name: 'Mortgage payment',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Rent',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Utilities', portfolios: [
                {
                    type: 'assets',
                    name: 'Gas',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Electricity',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Water',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Mobile phones',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Internet / Broadband',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Satelite / Digital TV',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Additional Income', portfolios: [
                {
                    type: 'assets',
                    name: 'Add item',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Add item',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
        ]  
    }
    const Living: Category ={
        total: 0,
        options: [
            {name:'Food & Drink', portfolios: [
                {
                    type: 'assets',
                    name: 'Grocery shopping',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Takeaways',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Work', portfolios: [
                {
                    type: 'assets',
                    name: 'Lunches & Snacks',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Takeaway coffees etc.',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Union professional fees',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Clothes & Snacks', portfolios: [
                {
                    type: 'assets',
                    name: "Children's clothes",
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'School uniform',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Shoes',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Work clothes',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'New clothes for you',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Laundry and dry cleaning',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Work', portfolios: [
                {
                    type: 'assets',
                    name: 'Lunches & Snacks',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Takeaway coffees etc.',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Union professional fees',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
            {name:'Additional Income', portfolios: [
                {
                    type: 'assets',
                    name: 'Add item',
                    amount: 0,
                    recurring: 'month'
                },
                {
                    type: 'assets',
                    name: 'Add item',
                    amount: 0,
                    recurring: 'month'
                },
            ]},
        ]  
    }
    return {budget, Income, Household,Living,message}
})

export const useBudgetStore = defineStore('budgetStore', ()=>{
    const budget = ref<Category[]>([
        {
            total: 0,
            options: [
                {name:'Pay', portfolios: [
                    {
                        type: 'assets',
                        name: 'Salary(after tax)',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Self-employment',
                        amount: 0,
                        recurring: 'month'
                    },
                ]},
                {name:'Other Income', portfolios: [
                    {
                        type: 'assets',
                        name: 'Savings & Investments',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Board & Rent',
                        amount: 0,
                        recurring: 'month'
                    },
                ]},
                {name:'Additional Income', portfolios: [
                    {
                        type: 'assets',
                        name: 'Add item',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Add item',
                        amount: 0,
                        recurring: 'month'
                    },
                ]},
            ] 
        },
        {
            total: 0,
            options: [
                {name:'Mortgage & Rent', portfolios: [
                    {
                        type: 'assets',
                        name: 'Mortgage payment',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Rent',
                        amount: 0,
                        recurring: 'month'
                    },
                ]},
                {name:'Utilities', portfolios: [
                    {
                        type: 'assets',
                        name: 'Gas',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Electricity',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Water',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Mobile phones',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Internet / Broadband',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Satelite / Digital TV',
                        amount: 0,
                        recurring: 'month'
                    },
                ]},
                {name:'Additional Income', portfolios: [
                    {
                        type: 'assets',
                        name: 'Add item',
                        amount: 0,
                        recurring: 'month'
                    },
                    {
                        type: 'assets',
                        name: 'Add item',
                        amount: 0,
                        recurring: 'month'
                    },
                ]},
            ]
        }
    ])

    return {budget}
})
