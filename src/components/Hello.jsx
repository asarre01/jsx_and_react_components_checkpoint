import myName from "../myName";
import Alert from 'react-bootstrap/Alert';

function Hello() {
    
    /* On met une conditionn sur le texte à afficher selon le contenu de variable myNAme
          ** Si le nom est vide, on affiche "Hello There!"
          ** Sinon, on affiche "Hello" + le nom stocker dans la variable
          ** On affiche le tout dans un alert stylisé
    */
    const txt = myName ===""? "Hello There!" : "Hello " +myName+"!"
    return (
		<>
            <Alert key="light" variant="light"
            style={{
                  position : 'absolute',
                  bottom : '0',
                  margin :'0',
                  width: '100%'

            }}
                  >
                  <h1>{txt}</h1>
            </Alert>
        </>
	);
}

export default Hello;