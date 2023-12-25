import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaLocationDot } from "react-icons/fa6"; // Importer l'icône de lieu depuis FontAwesome
import {FaPhoneAlt} from 'react-icons/fa'; // Importer l'icône de téléphone depuis FontAwesome

/*
    ** Créons une NavBar stylisé
*/

function Header() {
    return (
        <>
        {/*Bar de navigation Logo, adresse et contact */}
        <Navbar bg="light" variant="light"  expand="lg" className="text-white">
                <Container className='text-white'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="LogoLoc.png"
                            width="80"
                            height="80"
                            className="d-inline-block align-middle	"/>{' '}
                        <h2 className="d-inline-block align-middle	">RENT<span style={{color:'red', fontWeight: 'bolder'}}>CAR</span></h2>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <FaPhoneAlt/> 221 33 000 00 00 | <FaLocationDot /> Dakar, Avenue RizOlait
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;