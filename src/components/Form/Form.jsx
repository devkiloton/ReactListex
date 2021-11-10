import React from "react";
import { Component } from "react";
import './style.css'
export default class Form extends Component{

    constructor(props){
        super(props);
        this.title='';
        this.text='';
        this.category='';
    }

    _handleChangeTitle(event){
        event.stopPropagation();
        this.title=event.target.value;
    }

    _handleChangeText(event){
        event.stopPropagation();
        this.text=event.target.value;
    }

    _handleChangeCategory(event){
        event.stopPropagation();
        this.category=event.target.value
    }

    _createNote(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category)
    }

    render(){
        return(
        <form
            onSubmit={this._createNote.bind(this)} 
            className='form-note'>
                <select 
                className='form-note_select'
                onChange={this._handleChangeCategory.bind(this)}>
                    <option style={{display:'none'}}>
                        Choose a category
                    </option>
                    {this.props.categories.map(category =>{
                        return <option>{category}</option>
                    })}
                </select>
            <input 
                maxLength='12'
                type='text' 
                placeholder='Title (12 characters)'
                onChange={this._handleChangeTitle.bind(this)}
                />
            <textarea
                placeholder='Write something here...'
                onChange={this._handleChangeText.bind(this)}
                />
            <button>Send</button>
        </form>
        )
    }
}