import {Component} from "react";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item title is-5 m-auto">
                            Accueil
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;