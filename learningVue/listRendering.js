
import { ref, computed, reactive } from "vue";
import testComponent from "./testComponent.js";

export default{
    components: {
        testComponent
    },

    setup(){
        const items = ref([
            {
              message: 'Parent 1:',
              children: ['Child 1.1', 'Child 1.2', 'Child 1.3']
            },
            {
              message: 'Parent 2:',
              children: ['Child 2.1', 'Child 2.2']
            }
          ]);

        const objects = reactive({
            title: 'Strange',
            author: 'Albert Camus',
            publishedAt: '1949-01-10'
        });

        const obj = {
            title: 'Strange',
            author: 'Albert Camus',
            publishedAt: '1949-01-10'
        }
        
        const handleBtnClick= (obj)=>{
            alert(obj.data);
        }

        return {
            items, objects, handleBtnClick
        }
    },

    template: `
        <div v-for="(p, index) in items" :key="index">{{p.name}}</div>
        <h1></h1>
        <li v-for="item in items">{{item.message}}</li>

        <h1>Using destructuring</h1>
        <div>
            <li v-for="{message} in items">{{message}}</li>
        </div>

        <h1>Nested</h1>
        <li v-for="item in items">
            <span v-for="childItem in item.children">
                {{ item.message }} {{ childItem }} &nbsp;
            </span>
        </li>

        <h1>V-for in objects</h1>
        <li v-for="value in objects">
            {{value}}
        </li>


        <h1></h1>
        <li v-for="value, key in objects">{{key}} : {{value}}</li>

        <h1>Component</h1>
        <testComponent :object-type="objects" @child-to-parent="handleBtnClick"/>
    `
}