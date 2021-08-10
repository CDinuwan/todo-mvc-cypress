export class TodoPage{
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(todoText) {
        cy.navigate('.new-todo').type(todoText+"{enter}")
    }

    validateTodoTxt(todoIndex,expectedText) {
        cy.navigate('.todo-list:nth-child(${todoIndex+})level').should('have.text','Clean room')
    }
}