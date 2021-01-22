class Menu {

    constructor (nom, lien, sousmenus) {
    this.nom = nom;
    this.lien = lien;
    this.sousmenu = sousmenus; 
    };
    afficher() {

    const categorie = document.createElement ("a");

    categorie.textContent = this.nom;
    categorie.href = this.lien;

    return categorie;
    }
    sousafficher () {

    const souscategorie = document.createElement ("div")
    const categorie = document.createElement ("a");

    souscategorie.textContent = this.nom;
    souscategorie.href = this.lien;

    souscategorie.appendChild (categorie);

    return souscategorie;
    }
}

export default Menu;
