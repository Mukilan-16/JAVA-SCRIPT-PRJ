const notescontainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");
let notes= document.querySelectorAll("#input-box");

function update(){                                           
     notescontainer.innerHTML=localStorage.getItem("notes");           
}update();

function local(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}

btn.addEventListener("click", ()=>{
let inputbox = document.createElement("p");
let img = document.createElement("img");
inputbox.id="input-box";
inputbox.setAttribute("contenteditable","true");
    img.src="delete_5802947.png";
notescontainer.appendChild(inputbox).appendChild(img);
})

notescontainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        local();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll("#input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                local();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
    }
})



