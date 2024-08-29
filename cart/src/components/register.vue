<script setup>

import { ref } from "vue";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();
const baseYear = 1904; //yo 

const firstName = ref('');
const lastName = ref('');
const phoneNumber = ref('');
const password = ref('');

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const selectedMonth = ref(months[currentMonth]);
const selectedDate = ref(currentDate);
const selectedYear = ref(currentYear);
const gender = ref('');



const validateRegister = ()=>{
    //yo aba voli lekhne
}

</script>

<template>
    <div class="container">
        
        <div class="register-form-container">
            <div class="form-header">
                <h1>Sign Up</h1>
                <p>It's quick and easy</p>
            </div>
            <form action="" @submit.prevent="validateRegister">
            <div class="fullname">
                <input type="text" v-model="firstName" name="firstName" placeholder="First Name">
                <input type="text" v-model="lastName" name="lastName" placeholder="Last Name">
            </div>

            <div>
                <input type="text" v-model="phoneNumber" name="phoneNumber" placeholder="Mobile number or email">
            </div>

            <div>
                <input type="text" v-model="password" name="password" placeholder="New password">
            </div>

            <label for="">Birthday</label>
            <div class="bday">    
                <select name="month" id="" v-model="selectedMonth" class="">
                    <option v-for="(month,index) in months" value="month" :key="month" >{{ month }}</option>
                    <option :value="selectedMonth" :key="selectedMonth" >{{ selectedMonth }}</option>
                </select>

                <select name="day" id="" v-model="selectedDate">
                    <option v-for="day in 31" value="day" :key="day">{{ day }}</option>
                    <option :value="selectedDate" :key="selectedDate">{{ selectedDate }}</option>
                </select>

                <select name="year" id="" v-model="selectedYear">
                    <option v-for="year in (currentYear - baseYear)" value="currentYear - year + 1" :key="year">{{ currentYear - year + 1}}</option>
                    <option :value="selectedYear" :key="selectedYear">{{ selectedYear }}</option>
                </select>
            </div>

            <label for="">Gender</label>
            <div class="gender">
                <div class="three-option">
                    
                    <label for="male">Male</label>
                    <input type="radio" v-model="gender" name="gender" value="male" id="male"/>
                </div>

                <div class="three-option">
                    <label for="male">Female</label>
                    <input type="radio" v-model="gender" name="gender" value="female"/>
                </div>

                <div class="three-option">
                    <label for="male">Custom</label>
                    <input type="radio" v-model="gender" name="gender" value="custom"/>
                </div>
            </div>

            <div class="btn-div">
                <button>Sign Up</button>
            </div>
        </form>
        </div>
    </div>
</template>



<style scoped>
    .container{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .register-form-container{
        border: 2px solid black;
        width: 500px;
    }
    
    .register-form-container > div{
        width: 100%;
    }

    .form-header{
        padding: 30px 20px;
        margin-bottom: 10px;
        border-bottom: 2px solid black;
    }

    form{
        padding: 10px 20px;
    }
    
    form div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        
    }
    
    form>div>input, select, .gender>div{
        padding: 6px;
        border: 2px solid black;
        border-radius: 5px;
        width: 100%;
        outline: none;
    }

    .gender>div, .bday>select{
        display: flex;
        flex-wrap: wrap;
        flex-basis: 26%;
        justify-content: space-between;
    }

    .three-option {
        border: 1px solid black;
        padding: 2px 10px;
    }

    .btn-div{
        display: flex;
        justify-content: center;
    }

    button{
        margin-top: 20px;
        background-color: rgb(40, 183, 40);
        padding: 8px 32px;
        outline: none;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 20px;
        font-weight: bolder;
        /* width: fit-content; */
    }
</style>