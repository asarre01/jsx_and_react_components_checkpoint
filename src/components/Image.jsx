
import Card from 'react-bootstrap/Card';
import product from "..//product";
import myName from '../myName';

/*
    ** Récupérons l'image du produit 
    ** Affichons le dans un card stylisé avec card.img
*/

function Image() {
    /* Initialisation du chemin de l'image selon le contenu de variable myNAme
        ** Si le nom est vide, on affiche l'image par défaut 
        ** Sinon, on affiche l'image du produit
    */
    const chemin = myName ==="" ? "noImage.png" : product.image;
    return (
        <> 
        <Card.Img 
        variant = "top" 
        src = {chemin}
        style = {{
            height: '200px',
            objectFit: 'cover'
        }}/>
		</ >
    );
}

export default Image;