import { ref } from "vue";

export default{

    setup(){
        
        const handleEvent = (data,event)=>{
            alert(event.target.innerText);
        }

        const handleClick = ()=>{
            alert("you clicked me");
        }

        const eventHandling = `<h1>Event Handling in Vue JS</h1>

        <div>
            <p>Listening to event</p>

            <button v-on:click="handleEvent('Morning')">Morning</button>
            <button v-on:click="handleEvent('Evening')">Evening</button>
            <button v-on:click="handleEvent('using event variable', $event)">Click me</button>
            <button @click="(event)=>handleEvent('Night', event)">Night</button>
        
        </div>`;

        return {
            handleEvent,
            handleClick, eventHandling
        }
    },
    template: `
        
        <div v-html="eventHandling"></div>
        <div @click.self="handleClick" style="border:2px solid black;">

            <h2>I am the parent</h2>

            <div @click.self="handleClick" style="border:2px solid black;">
                <input @keyup.enter="handleClick" />
                <h1>I am the child</h1>
            </div>
        </div>
        
        
        `
}