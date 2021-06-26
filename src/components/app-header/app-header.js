import React from 'react';
import './app-header.css';


const AppHeader = (props) => {

    return (
        <div className="d-flex align-items-center justify-content-between appHeader">
            <h1>My Todo List</h1>
            <h4 className="doneTask"><span>{props.todo}</span> more todo, <span>{props.done}</span> done</h4>
        </div>
        
    )
}

export default AppHeader;