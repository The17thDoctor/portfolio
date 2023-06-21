import {Component} from "react";

class Footer extends Component {

    render() {
        return <footer className="footer has-background-grey-darker pl-6 pr-6">
            <div className="is-inline-flex" style={{width: "100%"}}>
                <div style={{flex: ".5"}}>
                    <p><strong className="has-text-grey-lighter">Me Contacter :</strong></p>
                    <ul>
                        <li><a rel="noreferrer" className="has-text-info" target="_blank" href="mailto://ewen.horville3@gmail.com">ewen.horville3@gmail.com</a></li>
                        <li className="has-text-grey-lighter">+33 6 59 18 31 92</li>
                    </ul>
                </div>
                <div className="content has-text-centered has-text-grey-lighter" style={{flex: "1"}}>
                    <p>Portfolio créé avec
                        <a rel="noreferrer" href="https://react.dev" target="_blank" className="has-text-info"> ReactJS </a>
                        et
                        <a rel="noreferrer" href="https://bulma.io" target="_blank" className="has-text-info"> Bulma CSS</a>.
                        <br/>
                        <a rel="noreferrer" href="https://github.com/The17thDoctor/portfolio" target="_blank" className="has-text-info">Code Source</a></p>
                </div>
                <div className="" style={{flex: ".5"}}>
                    <p><strong className="has-text-grey-lighter">Liens :</strong></p>
                    <ul>
                        <li><a rel="noreferrer" href="https://github.com/The17thDoctor" target="_blank" className="has-text-info">Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    }
}

export default Footer;