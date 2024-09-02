import { ref } from  "vue";

export default {

    setup(){

        const text = ref('');

        const checked = ref('');

        const changeAlert = ()=>{
            alert("changed..");
        }

        const checkedNames = ref([]);
        const picked = ref('');
        const selected = ref([]);


        return {
            text,
            changeAlert,
            checkedNames,
            picked,
            selected
            
        }
    },
    template: `
        <h1>INPUT</h1>
        <input type="text" :value="text" @input="event=>text=event.target.value" placeholder="Enter some data" />
        <br />
        <input type="checkbox" @change="changeAlert()" />
        <select @change="changeAlert()">
            <option value="A">A</option>
            <option value="A">B</option>
            <option value="A">C</option>
        </select>
        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>

        <div>Picked: {{ picked }}</div>

        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>


        <h1>Multiple select</h1>
        <div>Selected: {{selected}}</div>
        <select v-model="selected" multiple>
            <option disabled value="">Please select one</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
        </select>


        <h1>DISPLAY</h1>
        <p>Input text: {{text}}</p>


    `

}