import Card from 'react-bootstrap/Card';
import  product  from "../product";

/*
    ** Récupérons la desccription du produit 
    ** Affichons le dans un card stylisé à l'aide de card.text
*/

function Description() {
    return (
		<Card.Text>
            <ul className='list-group list-group-flush'>
				<li className='list-group-item'>{product.description[0]}</li>
				<li className='list-group-item'>{product.description[1]}</li>
				<li className='list-group-item'>{product.description[2]}</li>
    		</ul>
        </Card.Text>
	);
}

export default Description;