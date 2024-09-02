import { ref } from "vue";

export default{
    props: {
        objectType: Object
    },
    methods:{
        btnClick(){
            this.$emit('child-to-parent', {data: 'hello from the child'});
        }
    },
    template: `
        <li v-for="(value, key) in objectType">
            {{ key }} : {{value}}
        </li>
        <button @click="btnClick">Click me</button>
    `
}