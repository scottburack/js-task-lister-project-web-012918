const Task = (() => {

  let id = 1

  return class Task {

    constructor(description, priority) {
      this.description = description
      this.priority = priority
      this.id = id
      id++
    }

    render() {
      return (
        `
        <li data-id="${this.id}">Description: ${this.description}</li>
        <li data-id="${this.id}">Priority: ${this.priority}</li>
        `
      )
    }

  }

})()
