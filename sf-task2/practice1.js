const flags=document.querySelector("#one");
const tabs=document.querySelectorAll(".ff")
const see=document.querySelector(".one");
flags.addEventListener("change",(evt)=>{
   
    updateflags(evt.target);
    
})
const updateflags=(element)=>{
    let ele=flags.value;
    console.log(ele);
    let newsrc=`https://flagsapi.com/${ele}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
  }

see.addEventListener("click",(evt)=>{

})

tabs.forEach((tab,index)=>{
  tab.addEventListener("click",(evt)=>{
    tabs.forEach(tab=>{tab.classList.remove('active');})
    tab.classList.add('active');
  })
})



