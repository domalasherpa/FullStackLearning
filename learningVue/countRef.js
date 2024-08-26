import { ref } from 'vue'

export default {
    setup(){
        const count = ref(0);

        const displayCount = ()=>{
            alert(`count value: ${count.value}`);
        }
    
        return {
            count,
            displayCount
        }
    },
    template: `<button @click="count++">Count is {{ count }}</button>
                <br /> <br />
                <button @click="displayCount">Alert me</button>
    `
}