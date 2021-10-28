import React from "react";
import { Component } from "react";
import NotesList from './components/NotesList'
import Form from "./components/Form";
import './components/assets/app.css'
class App extends Component{

  constructor(){
    super();
    this.notes = [];
  }

  createNote(title, text)
  {
    const newNote = {title, text};
    this.notes.push(newNote);
  }
  
  render(){

      return (
      <section className='container-app'>
        <Form createNote={this.createNote.bind(this)}/>
        <NotesList notes={this.notes}/>
      </section>
    );
  }
}

export default App;
