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
            <strong>Technologies utilisées : Symfony (PHP), ReactJS</strong>
            <br/>
            <strong>Dates du stage: 04/2023 - 06/2023</strong>
        </p>,
        thumbnail: require("./Aquaticweb/homepage.png"),
        mainMedia: {type: "picture", value: require("./Aquaticweb/homepage.png")},
        secondaryMedia: [
            {type: "picture", value: require("./Aquaticweb/homepage.png")},
            {type: "picture", value: require("./Aquaticweb/homepage-2.png")},
            {type: "picture", value: require("./Aquaticweb/taxa.png")},
            {type: "picture", value: require("./Aquaticweb/signup.png")},
            {type: "picture", value: require("./Aquaticweb/sources.png")},
            {type: "picture", value: require("./Aquaticweb/api.png")}
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
            <strong>Langage utilisées : Lua</strong><br/>
            <strong>Date de sortie : 2020</strong>
        </p>,
        thumbnail: require("./Kaiser/menu.jpg"),
        mainMedia: {type: "picture", value: require("./Kaiser/menu.jpg")},
        secondaryMedia: [
            {type: "picture", value: require("./Kaiser/status.jpg")},
            {type: "picture", value: require("./Kaiser/warp.jpg")},
            {type: "picture", value: require("./Kaiser/tactical.jpg")},
            {type: "picture", value: require("./Kaiser/stargate.jpg")},
            {type: "picture", value: require("./Kaiser/options.jpg")},
            {type: "youtube", value: "https://youtube.com/embed/gLH1JaEDfuQ"}
        ],
        date: <strong>Date de sortie : 2020</strong>
    },
    {
        title: "Modélisation 3D",
        shortDesc: <span>
            Réalisé dans Blender, différents models 3D ayant pour but d'être importé dans <a target="_blank" rel="noreferrer" href="https://gmod.facepunch.com">Garry's Mod</a>.
        </span>,
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        thumbnail: require("./Models/farragut.png"),
        mainMedia: {type: "picture", value: require("./Models/farragut.png")},
        secondaryMedia: [
            {type: "picture", value: require("./Models/modbridge_v2.jpg")},
            {type: "picture", value: require("./Models/lawgiver.png")},
            {type: "picture", value: require("./Models/warp_core.png")},
            {type: "youtube", value: "https://youtube.com/embed/A0rNRkiQSeA"}
        ],
        date: <strong>2019 - 2023</strong>
    },
    {
        title: "AquaticWeb v4",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        thumbnail: "https://bulma.io/images/placeholders/1280x960.png",
        mainMedia: {type: "picture", value: "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"},
        secondaryMedia: [
            {type: "youtube", value: "https://youtube.com/embed/3Okx0T5vpFc"},
            {type: "picture", value: "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"}
        ],
        date: "04/2023 - 06/2023"
    },
    {
        title: "AquaticWeb v5",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        thumbnail: "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png",
        mainMedia: {type: "picture", value: "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"},
        secondaryMedia: [
            {type: "youtube", value: "https://youtube.com/embed/3Okx0T5vpFc"},
            {type: "picture", value: "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"}
        ],
        date: "04/2023 - 06/2023"
    },
    {
        title: "AquaticWeb v6",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        thumbnail: "https://bulma.io/images/placeholders/1280x960.png",
        mainMedia: {type: "picture", value: "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"},
        secondaryMedia: [
            {type: "youtube", value: "https://youtube.com/embed/3Okx0T5vpFc"},
            {type: "picture", value: "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"}
        ],
        date: "04/2023 - 06/2023"
    }
]

export default projectData;