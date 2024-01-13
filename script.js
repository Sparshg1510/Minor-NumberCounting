let valuecounts=document.querySelectorAll(".count");
let interval =5000;

valuecounts.forEach((valuecount)=>{
    let start=0;
    let end=parseInt(valuecount.getAttribute("data-val"));
    let duration=Math.floor(interval/end);
    let counter=setInterval(function(){
        start+=1;
        valuecount.textContent=start;
        if(start==end){
            clearInterval(counter);
        }
    },duration)
})