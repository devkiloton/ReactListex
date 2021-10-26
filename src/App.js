import React from "react";
import { Component } from "react";
import NotesList from '../src/components/NotesList'
import Form from "./components/Form";

class App extends Component{
  render(){
      return (
      <section>
        <Form/>
        <NotesList/>
      </section>
    );
  }
}

export default App;
