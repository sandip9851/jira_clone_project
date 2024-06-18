const btn = document.querySelector("#addTask");
const todoContainer = document.querySelector("#todo");
let count = 1;
btn.addEventListener("click",()=>{
  let card = document.createElement("div");
  
  card.className = "cards"
  card.id = `c${count++}`
  card.innerText = "Add your task todo here..."
  card.contentEditable = true;//element should be editable

  card.draggable = true;//element should be dragable
  todoContainer.append(card)


  card.addEventListener("click",()=>{
    if(card.innerText === "Add your task todo here..."){
      card.innerText = ""
    }
  })

  card.addEventListener("blur",()=>{
    if(card.innerText.trim() == ""){
      card.remove();
    }
  })

  //there are few event on drag

  //dragstart --when element start drag this event will start
  //dragend -- when element leave some where dargend will effect

//this  event are basically apply on area

  //dragover -- if i supose to track the path which path was traves to come drop zone
  //dragenter -- when element is enter into the drop zone area this moment will effect the dragenter 
  //drop -- basically where i want to move that area call drop zone

  card.addEventListener("dragstart",(eventDetails)=>{
    card.style.opacity = "0.5";
    console.log("dragstart")
    eventDetails.dataTransfer.setData("text",card.id )
  })

  card.addEventListener("dragend",()=>{
    card.style.opacity = "1"
    console.log("dragend")
  })

  let dragEvents = ['dragover','dragenter','drop'];

  dragEvents.forEach((Events) => {
    let column = document.getElementsByClassName("column");
    for(let col of column){
      col.addEventListener(Events,(eventDetails)=>{
        eventDetails.preventDefault();
        if(Events == "drop"){
          let cardId = eventDetails.dataTransfer.getData("text")
          let draggedCard = document.getElementById(cardId)
          let columnToBeMoved = eventDetails.target
          columnToBeMoved.append(draggedCard)
        }
      })
    }
  });







  /*const dropDown = document.createElement("select");
  dropDown.innerHTML = `
  <option value="todo">ToDo</option>
  <option value="progress">Progress</option>
  <option value="done">Done</option>`

  card.append(dropDown)

  dropDown.addEventListener("change",()=>{
   let checkTask = dropDown.value;
   const colToMove = document.getElementById(checkTask);
   colToMove.append(card)
  })*/
})