import { ref } from "vue";

export default{


    setup(){

        const closeDialog = ()=>{
            alert("Closing");
        }

        const choiceYes = ()=>{
            alert("You have chosen yes.");
        }

        const choiceNo = ()=>{
            alert("You have choosen no.");
        }
        return {
            closeDialog,
            choiceYes,
            choiceNo
        }
    },

    template:`
        <div class="modal-dialog" style="width:200px; border:2px solid black; padding:20px">
            <p style="text-align:right; font-weight:bold;"><button @click.self="closeDialog" >x</button></p>
            <p>Are you sure you want to close this ?</p>
            <p style="display:flex;justify-content:space-evenly;">
                <button @click.self="choiceYes">Yes</button>
                <button @click.self="choiceNo">No</button>
            </p>
        
        </div>
    
    `
}