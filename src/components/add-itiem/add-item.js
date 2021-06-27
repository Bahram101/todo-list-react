import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

    state = {
        label: ""
    }

    onLabelChange = (e) =>{      
        this.setState({
            label: e.target.value
        })        
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label:''
        })        
    }

    render(){
        
        return (   
            <form className='form' onSubmit={this.onSubmit}> 
                <input  type="text" 
                        className="form-control add" 
                        placeholder="What needs to be done"
                        onChange={this.onLabelChange}
                        value={this.state.label}
                        />
                <button className="btn btn-success item-add mt-0" >Add Item</button>
            </form>
        )
    }    
}