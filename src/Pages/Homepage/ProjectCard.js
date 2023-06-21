import {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

class ProjectCard extends Component {

    static propTypes = {
        project: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    }

    render() {
        return <div className="card">
            <div className="card-image soft-shadow">
                <figure className="image is-16by9">
                    <img alt={this.props.project.title} src={this.props.project.thumbnail}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <NavLink to={"projects/" + this.props.index} className="title has-text-link is-underlined is-4">{this.props.project.title}</NavLink>
                    </div>
                </div>

                <div className="content">
                    {this.props.project.shortDesc}
                    <br/>
                    <time>{this.props.project.date}</time>
                </div>
            </div>
        </div>
    }
}

export default ProjectCard;