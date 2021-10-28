import react from "react";
import { Component } from "react";
import NoteCard from "../NoteCard";
import './style.css'
export default class NotesLists extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
        <ul className='list-notes'>
        {this.props.notes.map((category, index) => {
            return (
                <li key={index} className='list-notes_item'>
                    <NoteCard/>
                </li>
            )
        })}
        </ul>
        )
    }
}