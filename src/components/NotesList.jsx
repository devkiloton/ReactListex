import react from "react";
import { Component } from "react";

export default class NotesLists extends Component{
    render(){
        return(
        <ul>
            <li>
                <section>
                    <header>
                    <h3>Title</h3>
                    </header>
                    <p>Write your notes</p>
                </section>
            </li>
        </ul>
        )
    }
}