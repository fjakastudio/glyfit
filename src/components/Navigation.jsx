import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">GLYFIT</Navbar.Brand>

				    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link end as={NavLink} to="/About/">About</Nav.Link>
                        </Nav>
				    </Navbar.Collapse>

                </Container>
            </Navbar>  
        </div>
    )
}
