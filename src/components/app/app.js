import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';


const App = () => {
    const todoData = [
        {label:'Drink Coffee', important:false, id:1},
        {label:'Make Awesome App', important:true, id:2},
        {label:'Have a lunch', important:false, id:3}
    ]
    return (
        <div className="container">
            <AppHeader />

            <div className="d-flex justify-content-between mb-3 ">                
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos = {todoData}/>
        </div>
    )
}


export default App;