import {Component} from "react";
import PropTypes from "prop-types";

class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentImage: 0
        }
    }

    static propTypes = {
        images: PropTypes.array.isRequired
    }

    handleNextImage = () => {
        this.setState({
            currentImage: (this.state.currentImage + 1) % this.props.images.length
        })
    }

    handlePreviousImage = () => {
        if (this.state.currentImage === 0) {
            this.setState({
                currentImage: this.props.images.length - 1
            })
        } else {
            this.setState({
                currentImage: (this.state.currentImage - 1) % this.props.images.length
            })
        }
    }

    getMediaHTML(media) {
        switch (media.type) {
            case "youtube": {
                return <div style={{position: "relative", width: "100%", paddingBottom: "56.25%"}}>
                    <iframe
                        style={{
                            width: "100%", height: "100%",
                            borderRadius: ".5em",
                            position: "absolute", top: "0", bottom: "0", left: "0", right: "0"
                        }}
                        src={media.value}
                        title="Showcase media"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
            }
            case "picture": {
                return <img className="rounded" alt="Showcase media" src={media.value}/>
            }
            default: {
                return <div/>
            }
        }
    }

    render() {
        return <div>
            {this.getMediaHTML(this.props.images[this.state.currentImage])}
            <div className="is-inline-flex mt-2" style={{width: "100%"}}>
                <div style={{flex: "1"}}/>
                <span className="button" onClick={this.handlePreviousImage}>&lt;</span>
                {this.props.images.map((image, index) => {
                    let focused = this.state.currentImage === index ? "is-carousel-focused" : "is-carousel";
                    return <img key={index} alt="" src="https://www.svgrepo.com/download/35641/dot.svg" className={"mr-1 ml-1 mt-auto mb-auto " + focused}/>;
                })}
                <span className="button" onClick={this.handleNextImage}>&gt;</span>
                <div style={{flex: "1"}}/>
            </div>
        </div>
    }
}



export default Carousel;