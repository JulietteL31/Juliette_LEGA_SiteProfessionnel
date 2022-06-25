//Affichage compétences web

let web = document.querySelector('.web');
let webP = document.querySelector('.webP');
// let flecheWeb = document.querySelector('.flecheWeb');

web.addEventListener("click", () => {
    if(getComputedStyle(webP).display != "block"){      
      webP.style.display = "block";
      webP.style.opacity = "0";
      webP.style.animation = "apparition 2s";
      webP.style.opacity = "1";

    //   flecheWeb.style.rotate = "0deg";
    //     flecheWeb.style.animation = "rotationFleche 1s";
    //     flecheWeb.style.rotate = "90deg";
    } else {
      webP.style.display = "none";
    }
  })


//Affichage compétences anthropologie

  let anthropo = document.querySelector('.anthropo');
  let anthropoP = document.querySelector('.anthropoP');

  anthropo.addEventListener("click", () => {
    if(getComputedStyle(anthropoP).display != "block"){
      anthropoP.style.display = "block";
      anthropoP.style.opacity = "0";
      anthropoP.style.animation = "apparition 2s";
      anthropoP.style.opacity = "1";
    } else {
      anthropoP.style.display = "none";
    }
  })


//Affichage compétences compost

let compost = document.querySelector('.compost');
let compostP = document.querySelector('.compostP');

  compost.addEventListener("click", () => {
    if(getComputedStyle(compostP).display != "block"){
      compostP.style.display = "block";
      compostP.style.opacity = "0";
      compostP.style.animation = "apparition 2s";
      compostP.style.opacity = "1";
    } else {
      compostP.style.display = "none";
    }
  })


  //Affichage des compétences langue

let langue = document.querySelector('.langue');
let langueP = document.querySelector('.langueP');

  langue.addEventListener("click", () => {
    if(getComputedStyle(langueP).display != "block"){
      langueP.style.display = "block";
      langueP.style.opacity = "0";
      langueP.style.animation = "apparition 2s";
      langueP.style.opacity = "1";
    } else {
      langueP.style.display = "none";
    }
  })


//Affichage soft skills

let soft = document.querySelector('.soft');
let softP = document.querySelector('.softP');

soft.addEventListener("click", () => {
    if(getComputedStyle(softP).display != "block"){
      softP.style.display = "block";
      softP.style.opacity = "0";
      softP.style.animation = "apparition 2s";
      softP.style.opacity = "1";
    } else {
      softP.style.display = "none";
    }
  })


//Affichage centres d'intérêt

let interet = document.querySelector('.interet');
let interetP = document.querySelector('.interetP');

  interet.addEventListener("click", () => {
    if(getComputedStyle(interetP).display != "block"){
      interetP.style.display = "block";
      interetP.style.opacity = "0";
      interetP.style.animation = "apparition 2s";
      interetP.style.opacity = "1";
    } else {
      interetP.style.display = "none";
    }
  })