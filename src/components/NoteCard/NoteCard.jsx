import React from "react";
import { Component } from "react";
import './style.css'
import {ReactComponent as ExcludeButton} from '../assets/excludeButton.svg'

export default class NoteCard extends Component{
    deleteNote()
    {
        const arrayIndex = this.props.arrayIndex;
        this.props.deleteNote(arrayIndex);
    }
    
    render(){
        return(
            <section className='note-card'>
                <header className='note-card_header'>
                    <h3 className='note-card_title'>{this.props.title}</h3>
                    <ExcludeButton className='note-card_cursor' onClick={this.deleteNote.bind(this)}/>
                </header>
                <textarea defaultValue={this.props.text} className='note-card_text'/>
                <h4>{this.props.category}</h4>
            </section>
        )
    }
}