const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".bt");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}//notescontainer.innerHTML stoe complete item with tag and it execute as same

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        console.log(e.target.parentElement)
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})