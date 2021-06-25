import React, { Component } from 'react';
import './todo-list-item.css';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';


export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }
    
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !this.state.important
            }            
        })
    }
      

    render() {        

        const { label, onDeleted } = this.props;

        const { done, important } = this.state;

        let classNames = 'todo-list-item';

        if(done){
            classNames += ' done';
        }
        if(important){
            classNames += ' important'
        }

        return (
            <div className={classNames}>
                <span onClick={this.onLabelClick} className="todo-list-item-label">
                    {label}
                </span>
                <span>
                    <button type="button" className="btn btn-outline-danger btn-sm btnDel" onClick={onDeleted} >
                        <DeleteIcon style={{ fontSize: 18 }} />
                    </button>
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={this.onMarkImportant}>
                        <PriorityHighIcon style={{ fontSize: 18 }} />
                    </button>
                </span>
            </div>
        )
    }

}
