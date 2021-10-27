import react from "react";
import { Component } from "react";
import './style.css'
export default class Form extends Component{
    render(){
        return(
        <form className='form-note'>
            <input type='text' placeholder='Title'/>
            <textarea placeholder='Write something here...'/>
            <button>Send</button>
        </form>
        )
    }
}