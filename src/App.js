import React from "react";
import NotesList from '../src/components/NotesList'
function App() {
  return (
    <section>
      <form>
        <input type='text' placeholder='Title'/>
        <textarea placeholder='Write something here...'/>
        <button>Send</button>
      </form>
      <NotesList/>
    </section>
  );
}

export default App;
