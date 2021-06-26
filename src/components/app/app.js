import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import AddItem from '../add-itiem';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';


export default class App extends Component {

    maxId = 100;

    state = {
        todoData : [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem(label){
        return {
            label,
            important:false,
            done:false,
            id:this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            // todoData.splice(idx,1); Нельзя изменить старые данные state
            const newArray = [
                ... todoData.slice(0, idx), 
                ... todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ... todoData, 
                newItem
            ];
            return {
                todoData: newArr
            }
        })        
    }

    toggleProperty(arr, id, propName){
        // Выбираем id которое мы хотим удалить
        const idx = arr.findIndex((el) => el.id === id );
            
        //Обновляем объект 
        const oldItem = arr[idx];
        const newItem = {... oldItem, [propName]: !oldItem[propName]}
        
        //Создаем новый массив
        return  [
            ... arr.slice(0, idx),
            newItem,
            ... arr.slice(idx+1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {                      
            return {
                todoData: this.toggleProperty(todoData,id,'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {                      
            return {
                todoData: this.toggleProperty(todoData,id,'important')
            }
        })
    }

    render(){

        const {todoData} = this.state;

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="container">
                <AppHeader todo={todoCount} done={doneCount}/>
    
                <div className="d-flex justify-content-between mb-3 ">                
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
    
                <TodoList 
                    todos = {todoData} 
                    onDeleted={this.deleteItem} 
                    onToggleDone = {this.onToggleDone}
                    onToggleImportant = {this.onToggleImportant}
                />

                <AddItem onAddItem={this.addItem} />
            </div>
        )
    }    
}
