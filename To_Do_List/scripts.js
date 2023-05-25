let task = document.querySelector('#task');
let addTask = document.querySelector('#addTask');

addTask.addEventListener('click',function(){
    let list =document.createElement('div');
    list.classList.add('list');
     
    let li =document.createElement('li');
    li.innerText='$(task.value)';
    list.appendChild(li);
    let checkButton = document.createElement('button');
    checkButton.innerHTML='<i class="fa fa-check"></i>';
    checkButton.classList.add('checkButton');
    list.appendChild(checkButton)
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fa fa-trash-can"></i>';
    deleteButton.classList.add('deleteButton');
    list.appendChild(checkButton)
})