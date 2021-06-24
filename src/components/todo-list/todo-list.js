import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                {/* <TodoListItem 
                    label={item.label}
                    important={item.important}
                /> */}
                <TodoListItem {... item} />
            </li>
        )
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>
    )

}

export default TodoList;