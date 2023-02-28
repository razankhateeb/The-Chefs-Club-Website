import { Button, Container, Nav, Navbar as NavBar, NavbarBrand } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../../public/style.css'
export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return <NavBar sticky="top" className='navbar shadow-sm '>
        <Container>
      
            <NavbarBrand className="me-auto"><Nav.Link to='/' as={NavLink}><img width={185} src="../../imgs/logo-dark.png" /></Nav.Link></NavbarBrand>
            <Nav className="ms-auto">
                <Nav.Link className="text-white "to='/' as={NavLink}>Home </Nav.Link>
                <Nav.Link className="text-white "to='/about' as={NavLink}>About </Nav.Link>
                <Nav.Link className="custom-button text-white " to='/order' as={NavLink}>Order Now </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button onClick={openCart}
                    style=
                    {{ width: "3rem", height: "3rem", position: "relative" }}
                    variant="outline-light" className='rounded-circle ms-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div className="rounded-circle  bg-danger d-flex justify-content-center align-item-center"
                        style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%,25%)" }}>
                        {cartQuantity}
                    </div>
                </Button>
            )}
          
        </Container>
    </NavBar>
}