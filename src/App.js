import React from "react";
import { Component } from "react";
import NotesList from './components/NotesList'
import Form from "./components/Form";
import './components/assets/app.css'
class App extends Component{
  render(){
      return (
      <section className='container-app'>
        <Form/>
        <NotesList/>
      </section>
    );
  }
}

export default App;
