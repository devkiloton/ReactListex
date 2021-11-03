import React from "react";
import { Component } from "react";
import './style.css'
export default class CategoriesList extends Component{

    _handleInputEvent(e)
    {
        if(e.key === 'Enter')
        {
            const categoryValue = e.target.value;
            this.props.addCategory(categoryValue);
        }
    }

    render()
    {
        return(
            <section className='container'>
                <ul className='list'>
                    {this.props.categories.map((category, index) => {
                        return <li key={index}>{category}</li>
                    })}
                </ul>
                <input 
                    placeholder='Add category' 
                    className='input'
                    type='text'
                    onKeyUp={this._handleInputEvent.bind(this)}
                />
            </section>
        );
    }
}