const experiences = {
    "liste": [
        {
            "periode": "Novembre 2021",
            "titre": "Stage Développement Web",
            "lieu": "Alliées",
            "affichage": "affichage7",
            "ref": ".display7"
        },
        {
            "periode": "Aout 2020 - Février 2021",
            "titre": "Service civique",
            "lieu": "Association ERABLES31 (aujourd'hui renommée Bio Ariège Garonne)",
            "affichage": "affichage6",
            "ref": ".display6"
        },
        {
            "periode": "Aout 2020 - Aout 2021",
            "titre": "Inventoriste (missions d'intérim ponctuelles",
            "lieu": "Ivalis",
            "affichage": "affichage5",
            "ref": ".display5"

        },
        {
            "periode": "Aout 2019 - Décembre 2019",
            "titre": "Stage en ONG",
            "lieu": "CEPAG, Paraguay",
            "affichage": "affichage4",
            "ref": ".display4"
        },
        {
            "periode": "Décembre 2018",
            "titre": "Intérim Technicienne de surface ",
            "lieu": "Temporis Intérim, Aix-en-Provence",
            "affichage": "affichage3",
            "ref": ".display3"
        },
        {
            "periode": "Septembre 2018",
            "titre": "Intérim Mise en carton",
            "lieu": "Temporis Intérim, Aix-en-Provence",
            "affichage": "affichage2",
            "ref": ".display2"
        },
        {
            "periode": "Juin 2016 - Juin 2017",
            "titre": "Bénévolat",
            "lieu": "Restos du Coeur, Toulouse",
            "affichage": "affichage1",
            "ref": ".display1"
        }
    ]
}

//Affichage bulles page experience

let listeExperiences = experiences.liste;

for (let i = 0; i < listeExperiences.length; i++) {
    let experience = listeExperiences[i];

    let contain = document.querySelector(".experience");

    let bulle = document.createElement("a");
    bulle.classList.add("items__contain__bulle");
    bulle.classList.add(experience.affichage);
    contain.appendChild(bulle);

    let titre2 = document.createElement("h2");
    titre2.classList.add("items__contain__bulle__periode");
    titre2.innerHTML = experience.periode;
    bulle.appendChild(titre2);

    let titre3 = document.createElement("h3");
    titre3.classList.add("items__contain__bulle__titre");
    titre3.innerHTML = experience.titre;
    bulle.appendChild(titre3);

    let org = document.createElement("p");
    org.classList.add("items__contain__bulle__lieu");
    org.innerHTML = experience.lieu;
    bulle.appendChild(org);
}

//Affichage descriptions pages formation et expérience

let benevolat = document.querySelector(".affichage1");
let carton = document.querySelector(".affichage2");
let menage = document.querySelector(".affichage3");
let paraguay = document.querySelector(".affichage4");
let inventaire = document.querySelector(".affichage5");
let erables = document.querySelector(".affichage6");
let alliees = document.querySelector(".affichage7");

let descriptionBenevolat = document.querySelector('.display1');
let descriptionCarton = document.querySelector('.display2');
let descriptionMenage = document.querySelector('.display3');
let descriptionParaguay = document.querySelector('.display4');
let descriptionInventaire = document.querySelector('.display5');
let descriptionErables = document.querySelector('.display6');
let descriptionAlliees = document.querySelector('.display7');

benevolat.addEventListener("click", function(e) {
    descriptionBenevolat.style.display = "block";
    descriptionBenevolat.focus({preventScroll:false});
});

carton.addEventListener("click", function(e) {
    descriptionCarton.style.display = "block";
    descriptionCarton.focus({preventScroll:false});
});

menage.addEventListener("click", function(e) {
    descriptionMenage.style.display = "block";
    descriptionMenage.focus({preventScroll:false});
});

paraguay.addEventListener("click", function(e) {
    descriptionParaguay.style.display = "block";
    descriptionParaguay.focus({preventScroll:false});
});

inventaire.addEventListener("click", function(e) {
    descriptionInventaire.style.display = "block";
    descriptionInventaire.focus({preventScroll:false});
});

erables.addEventListener("click", function(e) {
    descriptionErables.style.display = "block";
    descriptionErables.focus({preventScroll:false});
});

alliees.addEventListener("click", function(e){
    descriptionAlliees.style.display = "block";
    descriptionAlliees.focus({preventScroll:false});
})








//Fermeture descriptions pages formation et experience

let ferme1 = document.querySelector(".fermeP1");
let ferme2 = document.querySelector(".fermeP2");
let ferme3 = document.querySelector(".fermeP3");
let ferme4 = document.querySelector(".fermeP4");
let ferme5 = document.querySelector(".fermeP5");
let ferme6 = document.querySelector(".fermeP6");
let ferme7 = document.querySelector(".fermeP7");

let section = document.querySelector(".items");

ferme1.addEventListener("click", function(e) {
    descriptionBenevolat.style.display = "none";
    section.focus({preventScroll:false});
});

ferme2.addEventListener("click", function(e) {
    descriptionCarton.style.display = "none";
    section.focus({preventScroll:false});
});

ferme3.addEventListener("click", function(e) {
    descriptionMenage.style.display = "none";
    section.focus({preventScroll:false});
});

ferme4.addEventListener("click", function(e) {
    descriptionParaguay.style.display = "none";
    section.focus({preventScroll:false});
});

ferme5.addEventListener("click", function(e) {
    descriptionInventaire.style.display = "none";
    section.focus({preventScroll:false});
});

ferme6.addEventListener("click", function(e) {
    descriptionErables.style.display = "none";
    section.focus({preventScroll:false});
});

ferme7.addEventListener("click", function(e) {
    descriptionAlliees.style.display = "none";
    section.focus({preventScroll:false});
})