console.log("Go Chuck !");

// Etape1 : Gérer les évènements 

let cible = document.querySelector("div");

cible.addEventListener("mouseenter", () => {
    cible.style.borderRadius = "0%";
});

cible.addEventListener("mouseleave", () => {
    cible.style.borderRadius = "50%";
});

//Etape2 : ouvrir des articles 

let laFleche = document.getElementsByClassName("picto");

for (let i = 0; i < laFleche.length; i++) {
    let laDiv = laFleche.item(i).parentNode.nextElementSibling;
    laFleche.item(i).addEventListener("click", () => {
        laDiv.style.visibility = "visible";
    });
}

//if (etat === "visible") {
//    laDiv.style.visibility ="hidden";
//    laDiv.style.opacity = "0";   
//} else {
//    laDiv.style.visibility ="visible";
//    laDIV.style.opacity = "1";  
//}

// Etape3 : menu

import Menu from './Menu.js'
const navigation = document.querySelector ("nav");
const footer = document.querySelector ("footer");

(async () => {
    const response = await fetch("./data/menu.json");
    const data = await response.json();
    
    data.principal.forEach((element) => {
        const menu = new Menu (element.nom, element.lien);
        navigation.appendChild(menu.afficher());
        })

    data.pied.forEach((element) => {
        const menu = new Menu (element.nom, element.lien);
        footer.appendChild(menu.afficher());
        })

    data.principal[1].sousmenus.forEach((item) => {
        const sousnavigation = navigation.childNodes[1];
        const sousmenus = new Menu (item.nom, item.lien);
        sousnavigation.appendChild(sousmenus.sousafficher());

        })
})();