const btn = document.querySelector("#addTask");
const todoContainer = document.querySelector("#todo");
let count = 1;
btn.addEventListener("click",()=>{
  let parentCard = document.createElement("div");
  parentCard.className = "parentCrd"
  let card = document.createElement("div");
  
  card.className = "cards"
  card.id = `c${count++}`
  card.innerText = "Add your task here..."
  card.contentEditable = true
  parentCard.append(card)
  todoContainer.append(parentCard)


  card.addEventListener("click",()=>{
    if(card.innerText === "Add your task here..."){
      card.innerText = ""
    }
  })

  card.addEventListener("blur",()=>{
    if(card.innerText.trim() == ""){
      parentCard.remove();
    }
  })
  const dropDown = document.createElement("select");
  dropDown.innerHTML = `
  <option value="todo">ToDo</option>
  <option value="progress">Progress</option>
  <option value="done">Done</option>`

  parentCard.append(dropDown)

  dropDown.addEventListener("change",()=>{
   let checkTask = dropDown.value;
   const colToMove = document.getElementById(checkTask);
   colToMove.append(parentCard)
  })
})