import Carousel from "../../Components/Carousel";
import {useLoaderData} from "react-router-dom";
import projects from "../../Projects/manifest";

export async function projectLoader(request) {
    return projects[request.params.projectId];
}

export default function Project() {

    const project = useLoaderData();

    function getMediaHTML(media) {
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

    return (
        <div className="pt-5 pb-5" style={{marginLeft: "10%", marginRight: "10%"}}>
            <div className="box">
                <div className="is-inline-flex" style={{width: "100%"}}>
                    <div className="m-2" style={{flex: "1"}}>
                        {getMediaHTML(project.mainMedia)}
                    </div>
                    <div className="m-2" style={{width: ".5fr", flex: "1.2"}}>
                        <h1 className="title is-1">{project.title}</h1>
                        <p className="has-text-justified">{project.longDesc}</p>
                    </div>
                </div>
            </div>
            <div className="m-auto box" style={{paddingLeft: "7%", paddingRight: "7%"}}>
                <h1 className="title is-1 has-text-centered">Plus d'images</h1>
                <Carousel images={project.secondaryMedia}></Carousel>
            </div>
        </div>
    );
}