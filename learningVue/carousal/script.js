document.addEventListener("DOMContentLoaded", (event)=>{
    const carousal = document.querySelector(".carousal");
    // yelle chai kati ko scroll left garne dinxa. euta scrollAmount chai div rakheko.
    const baseScrollAmount = document.querySelector(".carousal>div").getBoundingClientRect().width;
    let isScrolling = false;
    const delay = 1000;

    carousal.addEventListener("wheel", (event)=>{
        event.preventDefault();
        if(isScrolling){
            return;
        }

        isScrolling = true;
        
        const scrollAmount = getDirection(event) === "up" ? baseScrollAmount : -(baseScrollAmount);
        carousal.scrollLeft += scrollAmount;
        
        setTimeout(()=>{
            isScrolling = false;
        }, delay);
    })

    
})

function getDirection(event){
    return event.deltaY > 0 ? "up" : "down"; 
}