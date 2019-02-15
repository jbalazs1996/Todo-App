import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component{
    render(){
        return(
            <div>
                <div className="add_new">
                    <input id="inputtodo" type="text" placeholder="Add todo here..." />
                    <button onClick={()=>{
                        let input = document.getElementById('inputtodo');
                        if(input.value){
                            this.props.onAddTodo(input.value);
                            input.value = '';
                        }
                    }}>+</button>
                </div>
                <div>
                    {this.props.todos.map((todo, index) => <TodoItem  todo={todo}
                        id={index} key={index} onDeleteTodo={this.props.onDeleteTodo} />)}
                </div>
            </div>
        );
    }
}
export default Todos;