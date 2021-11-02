import React from "react";
import { Component } from "react";
import NotesList from './components/NotesList'
import Form from "./components/Form";
import './components/assets/app.css'
import CategoriesList from "./components/CategoriesList";

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

  deleteNote(index)
  {
    let notesArray = this.state.notes;
    notesArray.splice(index,1);
    this.setState({notes:notesArray})
  }
  
  render(){

      return (
      <section className='container-app'>
        <Form createNote={this.createNote.bind(this)}/>
        <main className='container-app_main'>
          <CategoriesList/>
          <NotesList 
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
