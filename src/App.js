import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from 'react-bootstrap/Card';
import Header from './components/Header';
import Image from "./components/Image";
import Name from './components/Name';
import Description from './components/Description';
import Price from "./components/Price";
import Hello from './components/Hello';

function App() {

    return (
		<>
		{/*Compenanent comprenant la NavBar*/}
		<Header/>
		{/*Div contenant la card*/}
		<div className="mt-5 d-flex justify-content-around">
			{/*début de la Card qui décrit le produit*/}
			<Card
				style={{
					width: '20rem',
					minHeight: '28rem',
			}}>
				{/*Image du produit*/}
				<Image/>
				{/*Corps de la card*/}
				<Card.Body
					style={{
						position: 'relative'
				}}>
					{/*Compenant avec le Nom du produit*/}
					<Name/>
					{/*Compenant avec la Description du produit*/}
					<Description/>
					{/*Compenant avec le prix du produit*/}
					<Price/>
				</Card.Body>
			</Card>
			{/*Fin de la Card*/}
		</div>
			{/*Compenant avec le Hello*/}
			<Hello/>
		</>
	);
}

export default App;