import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> Home</Link>
                <Link className="navbar-brand" to="/avengers"> Avengers</Link>
            </nav>
        );
    }
}

export default NavBar;