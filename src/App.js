import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'
import './index.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
    
  handleChange(id) {
      this.setState(prevState =>{
        const updatedTodo = prevState.todo.map(todos =>{
          if(todos.id===id){
            todos.completed = !todos.completed
          }
          return todos
        })
        return{
          todo: updatedTodo
        } 
      })
    }
  render(){
    let TodosItems = this.state.todo.map(item => <TodoItem key={item.id} item ={item} handleChange={this.handleChange} />)
  return(
    <div className="container">
    <h1>To Do List</h1>
    {TodosItems}
    </div>
  );
  }
}

export default App;