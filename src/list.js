const List = (() => {

  let id = 1

  return class List {

    constructor(title) {
      this.title = title
      this.id = id
      this.tasks = []
      id++
    }

    render() {
      return (
        `<div id="list">
          <h2><button data-id = "${this.id}" class ="delete-list">X</button>${this.title}</h2>
          <h3>${this.renderAllTasks()}</h3>
        </div>
        `
      )
    }

    renderAllTasks() {
      return this.tasks.map(task => task.render()).join('')
    }
  }
})()
