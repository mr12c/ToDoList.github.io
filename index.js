let inputbox=document.getElementById("input-box")
let inputbtn=document.getElementById("btn")
let taskbox=document.getElementsByClassName("inputs")[0]
let check=0; 
inputbtn.addEventListener("click",adder)
function adder(){
    if(inputbox.value==""){
        alert("Please Enter Some Task")
    }
    else{
         
        let elem=document.createElement("div")
        elem.setAttribute("class","elem")
        elem.innerHTML=`<input type="checkbox" name="checker" class="checking">
        <span></span>
        <i class="fa-regular fa-circle-xmark"></i>`
        
        elem.children[1].innerText=inputbox.value
        elem.children[1].style="text-transform:capitalize"
      taskbox.appendChild(elem)
        inputbox.value=""
        console.log(elem.querySelector("input"))
     
            elem.querySelector("input").addEventListener("click",function complete(){
               if(elem.querySelector("input").checked==true){
                elem.querySelector("span").style="text-decoration:line-through; color:purple;  text-transform:capitalize;"
                check=1;
               }  
               else{
                elem.querySelector("span").style="text-decoration:none ; text-transform:capitalize; "
                check=0;
               }
            })
    
        
        elem.querySelector("i").addEventListener("click",function remover(){
            elem.remove()
        })
      
    }
}
// let checkbox=document.getElementById("checking")
 
// checkbox.addEventListener("focus",under)
// let check=1
// function  under(){
//  if(check==1){
//     console.log(checkbox.nextElementSibling)
//     checkbox.nextElementSibling.style="text-decoration:line-through;"
//     check=0;
//  }
//  else{
//     checkbox.nextElementSibling.style="text-decoration:none;"
//     check=1
//  }
// }

let  elemlist=document.getElementsByClassName("elem")
console.log(elemlist.length)
for(let i=0;i<elemlist.length;i++){
    elemlist[i].children[2].addEventListener("click",function remover(){
        elemlist[i].remove()
        console.log(elemlist[i])
    })
}
 