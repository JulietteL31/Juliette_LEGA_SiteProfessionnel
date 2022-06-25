const formations = {
    "liste": [
        {
            "periode": "Aout 2021 - En cours",
            "titre": "Formation Développement Web",
            "lieu": "Openclassrooms",
            "affichage": "affichage6",
            "ref": ".display6"
        },
        {
            "periode": "24 novembre 2021 et 10 décembre 2021",
            "titre": "Formation Guide composteur",
            "lieu": "Humus et Associés, Toulouse Métropole",
            "affichage": "affichage5",
            "ref": ".display5"

        },
        {
            "periode": "28 aout 2021",
            "titre": "Formation Référente de site de compostage",
            "lieu": "Humus et Associés, Toulouse Métropole",
            "affichage": "affichage4",
            "ref": ".display4"
        },
        {
            "periode": "2018 - 2020",
            "titre": "Master Anthropologie du Développement Durable",
            "lieu": "Aix-Marseille Université",
            "affichage": "affichage3",
            "ref": ".display3"
        },
        {
            "periode": "2015 - 2018",
            "titre": "Licence, Sciences de l'Homme, Anthropologie, Ethnologie",
            "lieu": "Université Toulouse Jean-Jaurès",
            "affichage": "affichage2",
            "ref": ".display2"
        },
        {
            "periode": "2015",
            "titre": "Baccalauréat Scientifique",
            "lieu": "Lycée des Arènes, Toulouse",
            "affichage": "affichage1",
            "ref": ".display1"
        }
    ]
}


//Affichage bulles page formation

let listeFormations = formations.liste;

for (let i = 0; i < listeFormations.length; i++) {
    let formation = listeFormations[i];

    let contain = document.querySelector(".formation");

    let bulle = document.createElement("a");
    bulle.classList.add("items__contain__bulle");
    bulle.classList.add(formation.affichage);
    contain.appendChild(bulle);

    let titre2 = document.createElement("h2");
    titre2.classList.add("items__contain__bulle__periode");
    titre2.innerHTML = formation.periode;
    bulle.appendChild(titre2);

    let titre3 = document.createElement("h3");
    titre3.classList.add("items__contain__bulle__titre");
    titre3.innerHTML = formation.titre;
    bulle.appendChild(titre3);

    let org = document.createElement("p");
    org.classList.add("items__contain__bulle__lieu");
    org.innerHTML = formation.lieu;
    bulle.appendChild(org);
}


//Affichage descriptions pages formation et expérience

let bac = document.querySelector(".affichage1");
let licence = document.querySelector(".affichage2");
let master = document.querySelector(".affichage3");
let compost1 = document.querySelector(".affichage4");
let compost2 = document.querySelector(".affichage5");
let dev = document.querySelector(".affichage6");

let descriptionBac = document.querySelector('.display1');
let descriptionLicence = document.querySelector('.display2');
let descriptionMaster = document.querySelector('.display3');
let descriptionCompost1 = document.querySelector('.display4');
let descriptionCompost2 = document.querySelector('.display5');
let descriptionDev = document.querySelector('.display6');

bac.addEventListener("click", function(e) {
        descriptionBac.style.display = "block";
        descriptionBac.focus({preventScroll:false});
});

licence.addEventListener("click", function(e) {
    descriptionLicence.style.display = "block";
    descriptionLicence.focus({preventScroll:false});
});

master.addEventListener("click", function(e) {
    descriptionMaster.style.display = "block";
    descriptionMaster.focus({preventScroll:false});
});

compost1.addEventListener("click", function(e) {
    descriptionCompost1.style.display = "block";
    descriptionCompost1.focus({preventScroll:false});
});

compost2.addEventListener("click", function(e) {
    descriptionCompost2.style.display = "block";
    descriptionCompost2.focus({preventScroll:false});
});

dev.addEventListener("click", function(e) {
    descriptionDev.style.display = "block";
    descriptionDev.focus({preventScroll:false});
});








//Fermeture descriptions pages formation et experience

let ferme1 = document.querySelector(".fermeP1");
let ferme2 = document.querySelector(".fermeP2");
let ferme3 = document.querySelector(".fermeP3");
let ferme4 = document.querySelector(".fermeP4");
let ferme5 = document.querySelector(".fermeP5");
let ferme6 = document.querySelector(".fermeP6");

let section = document.querySelector(".items");

ferme1.addEventListener("click", function(e) {
    descriptionBac.style.display = "none";
    section.focus({preventScroll:false});
});

ferme2.addEventListener("click", function(e) {
    descriptionLicence.style.display = "none";
    section.focus({preventScroll:false});
});

ferme3.addEventListener("click", function(e) {
    descriptionMaster.style.display = "none";
    section.focus({preventScroll:false});
});

ferme4.addEventListener("click", function(e) {
    descriptionCompost1.style.display = "none";
    section.focus({preventScroll:false});
});

ferme5.addEventListener("click", function(e) {
    descriptionCompost2.style.display = "none";
    section.focus({preventScroll:false});
});

ferme6.addEventListener("click", function(e) {
    descriptionDev.style.display = "none";
    section.focus({preventScroll:false});
});