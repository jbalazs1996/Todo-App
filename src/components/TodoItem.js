import React from 'react';

class TodoItem extends React.Component{
    getItemStyle = () => {
        return {textDecoration: this.props.todo.completed ? 'line-through' : 'none'};
    }
    
    render(){
        const {onDeleteTodo, id, onCheckboxChange} = this.props;
        return(
            <div className="todoitem">
                <input type="checkbox" onChange={()=>onCheckboxChange(id)}/>
                <div className="todotitle" style={this.getItemStyle()}>{this.props.todo.title}</div>
                <span className="deleteTodoItem" onClick={()=> onDeleteTodo(id)}>x</span>
            </div>
        );
    }
}
export default TodoItem;