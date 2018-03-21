

  class App {

    constructor(){
      this.lists = []
      this.listForm = document.getElementById('create-list-form')
      this.listInput = document.getElementById('new-list-title')
      this.taskForm = document.getElementById('create-task-form')
      this.taskListSelector = document.getElementById('parent-list')
      this.taskDescription = document.getElementById('new-task-description')
      this.taskPriority = document.getElementById('new-task-priority')
      this.listSection = document.getElementById('lists')

      this.listForm.addEventListener('submit', this.createNewList.bind(this))
      this.taskForm.addEventListener('submit', this.createNewTask.bind(this))
    }

    createNewList() {
      event.preventDefault()
      const newList = new List(this.listInput.value)
      this.lists.push(newList)
      event.target.reset()
      this.render()
    }

    createNewTask(){
      event.preventDefault()
      const parentId = this.taskListSelector.options[this.taskListSelector.selectedIndex].dataset.id
      const parentList = this.lists.find(list => {return list.id == parentId})
      const newTask = new Task(this.taskDescription.value, this.taskPriority.value)
      parentList.tasks.push(newTask)
      this.render()
    }


    render() {
      this.lists.length === 0 ? this.taskForm.style.visibility = "hidden" : this.taskForm.style.visibility = "visible"

      let listHTMLTemplate = []
      let listDropdown = []

      this.lists.forEach(function(list){
        listHTMLTemplate.push(list.render())
        listDropdown.push(`<option data-id="${list.id}">${list.title}</option>`)
      })

      this.taskListSelector.innerHTML = listDropdown.join("")
      this.listSection.innerHTML = listHTMLTemplate.join(" ")
    }
  }
