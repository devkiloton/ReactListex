import React from "react";
import { Component } from "react";
import NotesList from './components/NotesList'
import Form from "./components/Form";
import './components/assets/app.css'
class App extends Component{

  constructor(){
    super();
    this.state = {
      notes:[]
    };
  }

  createNote(title, text)
  {
    const newNote = {title, text};
    const newNotesArray = [...this.state.notes, newNote]
    const newState ={
      notes:newNotesArray 
    }
    this.setState(newState)
  }
  
  render(){

      return (
      <section className='container-app'>
        <Form createNote={this.createNote.bind(this)}/>
        <NotesList notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
