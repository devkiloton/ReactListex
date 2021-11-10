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
      notes:[],
      categories:[],
    };
  }

  createNote(title, text, category)
  {
    const newNote = {title, text, category};
    const newNotesArray = [...this.state.notes, newNote]
    const newState ={
      notes:newNotesArray 
    }
    this.setState(newState)
  }
  
  addCategory(categoryName)
  {
    const newCategoriesArray = [...this.state.categories, categoryName]
    const newState ={
      ...this.state,
      categories:newCategoriesArray
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
        <Form
          categories={this.state.categories} 
          createNote={this.createNote.bind(this)}/>
        <main className='container-app_main'>
          <CategoriesList
            categories={this.state.categories}
            addCategory={this.addCategory.bind(this)}/>
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
