const todoForm = document.getElementById('todoForm')
	const todoList = document.getElementById('todoList')
	const todoInput = document.getElementById('todoInput')
	
function createToDoItem(text){
        const li = document.createElement('li')
        li.className = "todo-item"
        li.innerHTML =
                        `
                        <input type="checkbox" class="todo-item-checkbox">
                        <span class="todo-item-text">${text}</span>
                        <button class="todo-item-delete">Delete</button>
                        `
    return li
    }


	todoForm.onclick = function (event) {
		event.preventDefault()
		const  todoText = todoInput.value
		if(!todoText) return
		const li =createToDoItem(todoInput.value.trim())
		todoList.appendChild(li)
		todoInput.value=""
	}

    todoList.onclick = function (event){
        if(event.target.className==="todo-item-delete" && confirm('Are you sure you want to delete it?'))
            event.target.parentNode.remove()
    }