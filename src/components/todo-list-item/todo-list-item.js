import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'; 
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const TodoListItem = ({label, important=false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <span className="d-flex justify-content-between">
            <span style={style}>{label}</span>

            <div>
                <button type="button" className="btn btn-outline-danger btn-sm" style={{marginRight:5}}>
                    <DeleteIcon style={{fontSize:18}} />
                </button>
                <button type="button" className="btn btn-outline-success btn-sm">                
                    <PriorityHighIcon style={{fontSize:18}} />
                </button>
            </div>
            
            
        </span> 
    ) 
        
        
}

export default TodoListItem;