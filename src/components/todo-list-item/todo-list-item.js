// import React, { Component } from 'react';
import './todo-list-item.css';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';


const TodoListItem = (props) =>  {

    const { label, onDeleted,
            onToggleDone,
            onToggleImportant,
            done,
            important } = props; 

    let classNames = 'todo-list-item';

    if(done){
        classNames += ' done';
    }
    if(important){
        classNames += ' important'
    }

    return (
        <div className={classNames}>
            <span onClick={onToggleDone} className="todo-list-item-label">{label}</span>
            <span>
                <button type="button" className="btn btn-outline-danger btn-sm btnDel" onClick={onDeleted} >
                    <DeleteIcon style={{ fontSize: 18 }} />
                </button>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
                    <PriorityHighIcon style={{ fontSize: 18 }} />
                </button>
            </span>
        </div>
    )

}

export default TodoListItem;