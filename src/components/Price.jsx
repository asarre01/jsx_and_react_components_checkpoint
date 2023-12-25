import Button from 'react-bootstrap/Button';
import product from "../product";

/*
    ** Récupérons le prix du produit 
    ** Affichons le dans un card stylisé à l'aide d'un button
*/

function Price() {
    return (
		<>
			<Button
            variant="danger"
            style={{
                position: 'absolute',
                bottom: '0rem',
                margin: '1rem'
            }}>{product.price}</Button>
		</>
	);
}

export default Price;