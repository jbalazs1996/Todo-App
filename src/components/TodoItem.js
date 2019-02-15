import React from 'react';

class TodoItem extends React.Component{

    render(){
        const {onDeleteTodo, id} = this.props;
        return(
            <div className="todoitem">
                <input type="checkbox" />
                <div className="todotitle">{this.props.todo.title}</div>
                <span onClick={()=> onDeleteTodo(id)}>x</span>
            </div>
        );
    }
}
export default TodoItem;