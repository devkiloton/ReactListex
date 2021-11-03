import React from "react";
import { Component } from "react";
import './style.css'
export default class CategoriesList extends Component{
    render(){
        return(
            <section className='container'>
                <ul className='list'>
                    <li>sports</li>
                    <li>i</li>
                    <li>felcaralho</li>
                </ul>
                <input className='input' type='text'/>
            </section>
        );
    }
}