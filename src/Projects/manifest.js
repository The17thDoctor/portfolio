import {NavLink} from "react-router-dom";

const projectData = [
    {
        title: "AquaticWeb",
        shortDesc:
            "Conçu durant un stage au CNRS, ce site web a pour but de cataloguer les travaux de recherche en écologie" +
            " réalisés par les chercheurs du centre.",
        longDesc: <p>
            Créé en 2008 par le co-directeur du centre de recherche CEREEP-Ecotron en Ile-de-France, Aquaticweb est une
            base de données et un site web permettant aux chercheurs de mettre en commun les résultats de leur travaux
            de recherche et d'en extraire des données.
            <br/><br/>
            Durant un stage de 10 semaines, j'ai été en charge de la refonte complète de l'API du site web ainsi que de
            la modernisation de la structure de la base de données.
            <br/><br/><br/>
            <strong>Technologies utilisées : Symfony (PHP), React (JavaScript)</strong>
            <br/>
            <strong>Dates du stage: 04/2023 - 06/2023</strong>
        </p>,
        thumbnail: require("./Aquaticweb/homepage.png"),
        mainMedia: {type: "picture", value: require("./Aquaticweb/homepage.png")},
        secondaryMedia: [
            {type: "picture", value: require("./Aquaticweb/homepage.png"), description: "Page d'accueil"},
            {type: "picture", value: require("./Aquaticweb/homepage-2.png"), description: "Page d'accueil, FAQ & Footer"},
            {type: "picture", value: require("./Aquaticweb/taxa.png"), description: "Page des taxons"},
            {type: "picture", value: require("./Aquaticweb/signup.png"), description: "Page d'inscription"},
            {type: "picture", value: require("./Aquaticweb/sources.png"), description: "Page des sources"},
            {type: "picture", value: require("./Aquaticweb/api.png"), description: "API Back-end"}
        ],
        date: <strong>04/2023 - 06/2023</strong>
    },
    {
        title: "Kaiser",
        shortDesc: <span>
            Réalisé au sein du jeu vidéo <a target="_blank" rel="noreferrer" href="https://gmod.facepunch.com">Garry's Mod</a>,
            ce script a pour but d'aider les joueurs à contrôler leurs propres vaisseaux.</span>,
        longDesc: <p>
            Team Spartan Cookies & Milk est un serveur de jeu ainsi qu'une communauté de passionés de science-fiction.
            Créé en 2012, le serveur avait pour but de laisser les joueurs exprimer leur créativité au travers de vaisseaux
            spatiaux ainsi que de scripts réalisés afin de les contrôler.
            <br/><br/>
            C'est en 2020 que m'est venu l'idée de créer <strong>Kaiser</strong>, un script permettant de réguler la grande majorité des systèmes d'un
            vaisseau tels que le système de survie, les boucliers de protection, les armes, les ressources, les téléporteurs
            grâce à une interface utilisateur designée sur Illustrator et importée en code Lua ainsi qu'un système de commandes par écrit.
            <br/><br/>
            Aujourd'hui, Kaiser compte plus de <strong>7 500</strong> lignes de code et est utilisé par la majorité
            des joueurs du serveur.
            <br/><br/>
            <strong>Technologies utilisées : Lua, Illustrator (UI)</strong><br/>
            <strong>Date de sortie : 2020</strong>
        </p>,
        thumbnail: require("./Kaiser/menu.jpg"),
        mainMedia: {type: "picture", value: require("./Kaiser/menu.jpg")},
        secondaryMedia: [
            {type: "picture", value: require("./Kaiser/status.jpg"), description: "Statut du vaisseau"},
            {type: "picture", value: require("./Kaiser/warp.jpg"), description: "Menu de déplacement"},
            {type: "picture", value: require("./Kaiser/tactical.jpg"), description: "Écran tactique (armement)"},
            {type: "picture", value: require("./Kaiser/stargate.jpg"), description: "Écran de contrôle de la porte des étoiles."},
            {type: "picture", value: require("./Kaiser/options.jpg"), description: "Menu d'options"},
            {type: "picture", value: require("./Kaiser/illustrator.png"), description: "Prototype sur Illustrator"},
            {type: "youtube", value: "https://youtube.com/embed/gLH1JaEDfuQ"}
        ],
        date: <strong>Date de sortie : 2020</strong>
    },
    {
        title: "Modélisation 3D",
        shortDesc: <span>
            Réalisé dans Blender, différents models 3D ayant pour but d'être importé dans <a target="_blank" rel="noreferrer" href="https://gmod.facepunch.com">Garry's Mod</a>.
        </span>,
        longDesc: <p>
            Durant mon temps libre, je conçoit de temps à autres des models 3D déstinés à être utilisés au sein de jeux vidéos.
            <br/><br/>
            J'ai acquis grâce à cela une certaine connaissance de <strong>Blender</strong> afin de créer des models 3D simples
            et parfois animés.
            <br/><br/>
            <strong>Technologie utilisée : Blender</strong>
        </p>,
        thumbnail: require("./Models/farragut.png"),
        mainMedia: {type: "picture", value: require("./Models/farragut.png")},
        secondaryMedia: [
            {type: "picture", value: require("./Models/modbridge_v2.jpg"), description: <p>
                    Couloirs de vaisseaux modulaires
                </p>},
            {type: "picture", value: require("./Models/lawgiver.png"), description: <p>
                    Lawgiver MkII de l'univers Judge Dredd (<a target="_blank" rel="noreferrer" href="https://www.imfdb.org/images/thumb/7/75/Dredd-Lawgiver-Mk-II-1.jpg/400px-Dredd-Lawgiver-Mk-II-1.jpg">Référence</a>)
                </p>},
            {type: "picture", value: require("./Models/warp_core.png"), description: <p>
                    Model 3D : Chambre antimatière provenant de Star Trek (<a target="_blank" rel="noreferrer" href="https://64.media.tumblr.com/591aaafae1bc5eaf477b5717a7d75e1d/tumblr_otwcnuAAp41w8hpj6o1_1280.png">Référence</a>)
            </p>},
            {type: "youtube", value: "https://youtube.com/embed/A0rNRkiQSeA"}
        ],
        date: <strong>2019 - 2023</strong>
    },
    {
        title: "Luna",
        shortDesc: <span>
            Le successeur de <NavLink to={"projects/1"}>Kaiser</NavLink>, un script permettant aux joueurs de contrôler leur
            vaisseau avec des capacités améliorées et un code plus performant et mieux écrit.
        </span>,
        longDesc: <p>
            Kaiser est un script permettant aux joueurs d'un serveur de jeu de contrôler leur vaisseau spatial. Créé en 2020,
            Kaiser est aujourd'hui l'un des scripts les plus populaire auprès des joueurs, c'est pourquoi j'ai décidé de recréer
            un script similaire avec plus de fonctionnalités et une organisation du code améliorée.
            <br/><br/>
            Luna est un projet en développement reprenant les principes de fonctionnement de Kaiser avec plus de fonctionnalités
            comme la capacité pour un joueur de développer et facilement pouvoir intégrer ses propres fonctionnalités en utilisant
            un système de module.
            <br/><br/>
            Luna est aujourd'hui encore en développement avec une partie serveur implémentée et une interface utilisateur
            encore à l'état de prototype sur Inkscape.
            <br/><br/>
            <strong>Technologies utilisées : Lua, Inkscape (design UI)</strong>
        </p>,
        thumbnail: require("./Luna/menu.png"),
        mainMedia: {type: "picture", value: require("./Luna/menu.png")},
    },
    {
        title: "Celestia",
        shortDesc: <span>
            Un site web permettant à des joueurs de partager leur vaisseaux spatiaux ou leur scripts.
        </span>,
        longDesc: <p>
            Afin de faciliter le partage des création de joueurs sur un serveur de jeu, l'idée m'est venu de créer un
            site web permettant de mettre en ligne ses créations et de les partager avec d'autres joueurs.
            <br/><br/>
            Le développement du site se fera avec React (JavaScript) ainsi que Symfony (PHP) afin de créer une API.
            <br/>
            Le site n'est aujourd'hui encore qu'à l'état de prototype.
            <br/><br/>
            <strong>Technologies utilisées : React (JavaScript), Symfony (PHP), Inkscape (UI)</strong>
        </p>,
        thumbnail: require("./Celestia/celestia.png"),
        mainMedia: {type: "picture", value: require("./Celestia/celestia.png")},
    },
    {
        title: "Wavefront Importer",
        shortDesc: <span>
            Un script permettant d'importer des objets au format wavefront (.obj) en jeu et de les afficher.
        </span>,
        longDesc: <p>
            Un script simple permettant d'importer des objets au format wavefront (.obj) en jeu et de les afficher en temps réel.
            <br/><br/>
            Le script est capable de recréer un model avec mapping UV, normales et séparation des différents groupes de matériaux.
            <br/>
            Le but de ce script est de faciliter le chargement dynamique de models 3D en jeu. Capacité qui n'est actuellement
            pas supportée par le jeu.
            <br/><br/>
            <strong>Technologies utilisées : Lua, Blender (3D)</strong>
        </p>,
        thumbnail: require("./Wavefront/blender.png"),
        mainMedia: {type: "picture", value: require("./Wavefront/blender.png")},
        secondaryMedia: [
            {type: "picture", value: require("./Wavefront/ingame.jpg"), description: "Model en jeu"}
        ],
    }
]

export default projectData;