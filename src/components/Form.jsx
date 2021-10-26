import react from "react";
import { Component } from "react";

export default class Form extends Component{
    render(){
        return(
        <form>
            <input type='text' placeholder='Title'/>
            <textarea placeholder='Write something here...'/>
            <button>Send</button>
        </form>
        )
    }
}