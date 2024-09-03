import { ref, watch, reactive } from "vue";


export default{
    setup(){
        const num1 = ref(null);
        const num2 = ref(null);
        const sum = ref(null);
        const number = reactive({
            count : 12
        });


        // watch(()=>num1.value+num2.value, (s)=>{
        //     sum.value = s;
        // })

        // watch([num1, num2], ([newNum1, newNum2])=>{
        //     sum.value = newNum1 + newNum2;
        // }, {immediate: true})

        watch(()=>number.count, (count)=>{
            alert(count);
        });

        watch(num1, (num1)=>{
            number.count = num1;
        });

        return {
            num1, num2, sum, number
        }
    },
    template:`

        <input v-model.number.lazy="num1" />
        <input v-model.number.lazy="num2" />
        <input v-model.number.lazy="number.count" />

        {{number.count}}
        <p>{{num1}}</p>
        <p>{{sum}}</p>
    `
}