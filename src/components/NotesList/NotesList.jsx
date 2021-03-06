import React from "react";
import { Component } from "react";
import NoteCard from "../NoteCard";
import './style.css'
export default class NotesLists extends Component{

    render(){
        return(
        <ul className='list-notes'>
        {this.props.notes.map((notes, index) => {
            return (
                <li key={index} className='list-notes_item'>
                    <NoteCard 
                        deleteNote={this.props.deleteNote} 
                        title={notes.title} 
                        text={notes.text}
                        arrayIndex={index}
                        category={notes.category} 
                    />
                </li>
            )
        })}
        </ul>
        )
    }
}