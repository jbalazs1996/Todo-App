import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: []
  }
  
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Todos 
          todos={this.state.todos}
          onAddTodo={this.handleAddTodo}
          onDeleteTodo={this.handleDeleteTodo}
          onCheckboxChange={this.handleCheck}
        />
      </React.Fragment>
    );
  }

  handleAddTodo = (text) => {
    const arr = this.state.todos;
    arr.push({title: text, completed: false});
    this.setState({todos: arr});
  }

  handleDeleteTodo = (indx) => {
    const arr = this.state.todos.filter((todo, index) => index !== indx);
    this.setState({todos: arr});
  }

  handleCheck = (id) => {
    this.setState({todos: this.state.todos.map((todo, index)=>{
      if(index === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }
}
export default App;
