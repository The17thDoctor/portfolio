import video from "../../media/main_vid.mp4";
import cpu from "../../media/cpu.png";

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
                    Étudiant en informatique
                </p>
            </div>
        </div>
        <div className="is-flex is-flex-direction-column soft-shadow pb-6 pt-6">
            <h1 className="title is-1 has-text-centered m-auto">A Propos</h1>
            <div className="tile is-ancestor m-auto" style={{paddingLeft: "10%", paddingRight: "10%"}}>
                <div className="tile p-4 is-align-items-center">
                    <div className="mr-5">
                        <figure className="image is-128x128">
                            <img alt="placeholder" src={cpu}/>
                        </figure>
                    </div>
                    <div>
                        <p className="has-text-justified">
                            Passionné par l'informatique depuis le collège, je programme sur mon temps libre et j'apprend
                            tous les jours.
                            <br/>
                            Je me suis aussi lancé dans la gestion de mon propre serveur maison et j'héberge actuellement
                            plusieurs serveurs de jeu ainsi que ce portfolio.
                            <br/>
                            D'autres projets sont à venir !
                            <br/><br/>
                            Je suis aujourd'hui à la recherche d'une alternance en informatique afin de continuer mes études
                            en école d'ingénieur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="tile is-ancestor is-white p-4 is-vertical">
            <div className="tile is-parent mr-auto ml-auto m-4">
                <h1 className="title is-1">Réalisations</h1>
            </div>
            <div className="tile is-parent mr-auto ml-auto">
                <div className="tile p-4 is-black"><ProjectCard index={0} project={projects[0]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={1} project={projects[1]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={2} project={projects[2]}/></div>
            </div>
            <div className="tile is-parent mr-auto ml-auto m-4">
                <h1 className="title is-1">Travaux en cours</h1>
            </div>
            <div className="tile is-parent mr-auto ml-auto">
                <div className="tile p-4 is-black"><ProjectCard index={3} project={projects[3]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={4} project={projects[4]}/></div>
                <div className="tile p-4 is-black"><ProjectCard index={5} project={projects[5]}/></div>
            </div>
        </div>
    </div>
}