import video from "../../media/main_vid.mp4";
import ProjectCard from "./ProjectCard";
import projects from "../../Projects/manifest";

export default function Homepage() {
    return <div>
        <div className="is-flex is-flex-direction-column" style={{height: "30em", overflow: "hidden"}}>
            <div className="blurred" style={{height: "inherit"}}>
                <video className="crop" style={{height: "initial", margin: "auto"}} autoPlay={true} aria-disabled={true} loop="loop" muted={true}>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div style={{position: "absolute", height: "30em", width: "100%"}}>
                <h1 className="title is-1 has-text-white has-text-centered" style={{marginTop: "3.55em"}}>Ewen Horville</h1>
                <p className="title is-2 has-text-centered has-text-white">
                    Étudiant et passionné en Informatique
                </p>
            </div>
        </div>
        <div className="is-flex is-flex-direction-column soft-shadow" style={{height: "30em"}}>
            <h1 className="title is-1 has-text-centered m-auto p-6">A Propos de moi</h1>
            <div className="tile is-ancestor m-auto" style={{paddingLeft: "10%", paddingRight: "10%"}}>
                <div className="tile p-4 is-align-items-center">
                    <div className="mr-5">
                        <figure className="image is-128x128">
                            <img alt="placeholder" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div>
                        <p className="has-text-justified">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus mi lectus. Curabitur congue consectetur orci non consectetur. Donec at purus sodales, mollis dui ac, volutpat tellus. Nullam non pulvinar nisl. Maecenas fringilla auctor sem, vitae posuere turpis ultricies vitae. Nullam urna neque, accumsan nec ex eget, aliquet ultrices nulla. Aenean id nisl eu erat iaculis venenatis. Nullam semper sapien leo, vitae mollis augue auctor in. Donec at dui in orci varius placerat aliquet id neque.</p>
                    </div>
                </div>
                <div className="tile p-4 is-align-items-center">
                    <div className="mr-5">
                        <figure className="image is-128x128">
                            <img alt="placeholder" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div>
                        <p className="has-text-justified">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus mi lectus. Curabitur congue consectetur orci non consectetur. Donec at purus sodales, mollis dui ac, volutpat tellus. Nullam non pulvinar nisl. Maecenas fringilla auctor sem, vitae posuere turpis ultricies vitae. Nullam urna neque, accumsan nec ex eget, aliquet ultrices nulla. Aenean id nisl eu erat iaculis venenatis. Nullam semper sapien leo, vitae mollis augue auctor in. Donec at dui in orci varius placerat aliquet id neque.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="tile is-ancestor is-white p-4 is-vertical">
            <div className="tile is-parent mr-auto ml-auto m-4">
                <h1 className="title is-1">Mes Projets</h1>
            </div>
            <div className="tile is-parent mr-auto ml-auto">
                <div className="tile p-4 is-black"><ProjectCard index={0} project={projects[0]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={1} project={projects[1]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={2} project={projects[2]}/></div>
            </div>
            <div className="tile is-parent">
                <div className="tile p-4 is-black"><ProjectCard index={3} project={projects[3]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={4} project={projects[4]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={5} project={projects[5]}/></div>
            </div>
        </div>
    </div>
}