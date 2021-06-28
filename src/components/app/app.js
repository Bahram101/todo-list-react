import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import AddItem from '../add-itiem';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';


export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: "",
        filter: 'all' // active, done
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            // todoData.splice(idx,1); Нельзя изменить старые данные state
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        })
    }

    toggleProperty(arr, id, propName) {
        // Выбираем index которое мы хотим удалить
        const idx = arr.findIndex((el) => el.id === id);

        //Обновляем объект 
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] }

        //Создаем новый массив
        const newArr = [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]

        return newArr;

    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onSearchChange = (term) => {
        this.setState({ term });
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }
       

    filter(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default :
                return items;
        }
    }



    render() {

        const { todoData, term, filter} = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="container">
                <AppHeader todo={todoCount} done={doneCount} />

                <div className="d-flex justify-content-between mb-3 ">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />

                <AddItem onAddItem={this.addItem} />
            </div>
        )
    }
}
