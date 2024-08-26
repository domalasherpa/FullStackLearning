import { ref } from 'vue';

export default {
    setup(){
        const vueClassStyle = {
            style: {
                backgroundColor: 'green',
                color: 'white',
                padding: '20px'
            },
            class: 'wrapper',
            id: 'bindedClass'
        };

        return {
            vueClassStyle
        }
    },
    template: (`
        <div v-bind="vueClassStyle">Nulla aute mollit esse amet aute aute proident ullamco tempor deserunt.</div>
    `),
    
}