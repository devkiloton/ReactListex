import React from "react";
import { Component } from "react";
import './style.css'

export default class NoteCard extends Component{
    render(){
        return(
            <section className='note-card'>
                <header className='note-card_header'>
                    <h3 className='note-card_title'>{this.props.title}</h3>
                </header>
                <textarea readOnly placeholder={this.props.text} className='note-card_text'/>
            </section>
        )
    }
}