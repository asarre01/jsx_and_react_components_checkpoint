import Card from 'react-bootstrap/Card';
import product from '../product';
console.log (product)

/*
    ** Récupérons le nom du produit 
    ** Affichons le dans un card stylisé avec card.title
*/

function Name() {
    return (
		<>
			<Card.Title>{product.name}</Card.Title>
		</>
	);
}

export default Name;