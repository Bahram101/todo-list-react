import React from 'react';
import './add-item.css';

const AddItem = (props) => {
    
    return (
        <div className="item-add">
            <button className="btn btn-success" onClick={() => props.onAddItem('Hello World')}>
                Add Item
            </button>
        </div>
    )
}

export default AddItem