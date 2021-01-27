console.log("Go Chuck !");

// Etape1 : gérer les évènements 

const cible = document.querySelector("main > section > aside > div");

cible.addEventListener("mouseenter", () => {
    cible.style.borderRadius = "0%";
});

cible.addEventListener("mouseleave", () => {
    cible.style.borderRadius = "50%";
});

//Etape2 : ouvrir des articles 

const articleHeaders = document.querySelectorAll ("main > section > section > article > header");


    articleHeaders.forEach((element) => {
        element.addEventListener ("click", () => {
        const div = element.nextElementSibling;
                
        if (div.style.visibility !== "visible") {
            div.style.visibility = "visible";
            div.style.height = "auto";

        }else{
            div.style.visibility = "hidden";
            div.style.height = "0px";
        }

    });

});


/*const laFleche = document.getElementsByClassName("picto");

for (let i = 0; i < laFleche.length; i++) {
    let laDiv = laFleche.item(i).parentNode.nextElementSibling;
    laFleche.item(i).addEventListener("click", () => {
        laDiv.style.visibility = "visible";
    });
}

if (etat === "visible") {
    laDiv.style.visibility ="hidden";
    laDiv.style.opacity = "0";   
} else {
    laDiv.style.visibility ="visible";
    laDIV.style.opacity = "1";  
}*/

// Etape3 : menu

const nav = document.querySelector ("main > header > nav");
const footer = document.querySelector("main > footer");

fetch ("data/menu.json")
    .then(response => response.json())
    .then ((datas) =>{
        datas.principal.forEach((element) => {

            const lien = document.createElement ("a");
            lien.textContent = element.nom;
            lien.href = element.lien;
            nav.appendChild(lien);
        });
        datas.pied.forEach((element) => {

            const lien = document.createElement ("a");
            lien.textContent = element.nom;
            lien.href = element.lien;
            footer.appendChild(lien);
        });

    });

/*import Menu from './Menu.js'
const navigation = document.querySelector("nav");
const footer = document.querySelector("footer");

(async () => {
    const response = await fetch("./data/menu.json");
    const data = await response.json();

    data.principal.forEach((element) => {
        const menu = new Menu(element.nom, element.lien);
        navigation.appendChild(menu.afficher());
    })

    data.pied.forEach((element) => {
        const menu = new Menu(element.nom, element.lien);
        footer.appendChild(menu.afficher());
    })

    data.principal[1].sousmenus.forEach((item) => {
        const sousnavigation = navigation.childNodes[1];
        const sousmenus = new Menu(item.nom, item.lien);
        sousnavigation.appendChild(sousmenus.sousafficher());

    })
})();*/