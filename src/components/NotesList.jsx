import react from "react";
import { Component } from "react";
import NoteCard from "./NoteCard";
export default class NotesLists extends Component{
    render(){
        return(
        <ul>
            <li>
                <NoteCard/>
            </li>
        </ul>
        )
    }
}