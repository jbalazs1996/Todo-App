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
                        }}
                        /*onKeyUp={()=>{

                        }}*/
                    >+</button>
                </div>
                <div>
                    {this.props.todos.map((todo, index) => <TodoItem  todo={todo}
                        id={index} key={index} onDeleteTodo={this.props.onDeleteTodo}
                        onCheckboxChange={this.props.onCheckboxChange} />)}
                </div>
            </div>
        );
    }

    /*checkInputValue = () => {
        let input = document.getElementById('inputtodo');
        if(input.value){
            this.props.onAddTodo(input.value);
            input.value = '';
        }
    }*/
}
export default Todos;