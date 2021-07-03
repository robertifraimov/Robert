import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li> <a href="/">Home</a> </li>
                	<li> <a href="/WatchBrands">WatchBrands</a> </li>
                </ul>    
            </nav>
        )
    }
}
