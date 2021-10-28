import React from "react";
import { Component } from "react";
import './style.css'
export default class Form extends Component{

    constructor(props){
        super(props);
        this.title='';
        this.text='';
    }

    _handleChangeTitle(event){
        event.stopPropagation();
        this.title=event.target.value;
    }

    _handleChangeText(event){
        event.stopPropagation();
        this.text=event.target.value;
    }

    _createNote(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text)
    }

    render(){
        return(
        <form
            onSubmit={this._createNote.bind(this)} 
            className='form-note'>
            <input 
                type='text' 
                placeholder='Title'
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