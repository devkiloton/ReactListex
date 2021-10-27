import react from "react";
import { Component } from "react";
import './style.css'

export default class NoteCard extends Component{
    render(){
        return(
            <section className='note-card'>
                <header className='note-card_header'>
                    <h3 className='note-card_title'>Title</h3>
                </header>
                <textarea readOnly placeholder='Write your notes' className='note-card_text'/>
            </section>
        )
    }
}