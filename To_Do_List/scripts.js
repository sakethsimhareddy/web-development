let task = document.querySelector('#task');
let addTask = document.querySelector('#addTask');
let taskArea= document.querySelector('#taskArea')
addTask.addEventListener('click',function(){
    let list =document.createElement('div');
    list.classList.add('list');
     
    let li =document.createElement('li');
    li.innerText=task.value;
    list.appendChild(li);
    let checkButton = document.createElement('button');
    checkButton.innerHTML='<i class="fa fa-check"></i>';
    checkButton.classList.add('checkButton');
    list.appendChild(checkButton)
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML='<i class="fa fa-close"></i>';
    deleteButton.classList.add('deleteButton');
    list.appendChild(deleteButton)

    if(task.value==="")
    {
        alert('please enter the a Task')

    }
    else{
        taskArea.appendChild(list)
    }
    
    task.value=""
    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration='line-through';
    })
    deleteButton.addEventListener('click',function(e){
        let target =e.target
        
        target.parentElement.parentElement.remove();
    


    })
})
