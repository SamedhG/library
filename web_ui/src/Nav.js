import {Navbar, Nav, Alert} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function AppNav({error, session}) {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact className="navbar-brand">
                    HOME
                </NavLink>
                <Nav className="mr-auto">
                    <NavLink to="/member" className="nav-link" 
                        activeClassName="active">
                        Members
                    </NavLink>
                    <NavLink to="/book" className="nav-link" 
                        activeClassName="active">
                        Books
                    </NavLink>
                    <NavLink to="/author" className="nav-link" 
                        activeClassName="active">
                        Authors
                    </NavLink>
                </Nav>
            </Navbar>
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    )
}
