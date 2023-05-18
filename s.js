const notesCointainer=document.querySelector(".notes-cointainer");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes() {
    notesCointainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function update(){
    localStorage.setItem("notes",notesCointainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox =document.createElement("p");
    let img =document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    notesCointainer.appendChild(inputBox).appendChild(img);
})
notesCointainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        update();
    }
    else if(e.target.tagName==="P"){
        notes= notes.querySelectorAll(".input-box");
        notes.forEach(nt=> {
            nt.onkeyup=function(){
                update();
            }
        })

    }
    
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

