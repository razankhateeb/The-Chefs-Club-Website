import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/FormatCurrency";
import storeItems from "../data/items.json"
import { useNavigate } from "react-router-dom";


type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `checkout`;
        navigate(path);
        closeCart()
    }
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>  Cart</Offcanvas.Title>

        </Offcanvas.Header><Offcanvas.Body>

            <Stack gap={3} >
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}

                <div className="ms-auto fw-bold fs-5">
                    Total  {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.idMeal === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                </div>

                <Button onClick={routeChange} className="w-100" style={{ backgroundColor: "var(--primary-color)", borderColor: "var(--primary-color)" }}>Proceed to Checkout</Button>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}