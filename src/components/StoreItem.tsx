import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/FormatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../../public/style.css'


type StoreItemProps = {
    idMeal: number
    strMeal: string | undefined
    strMealThumb: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strIngredient5: string
    strIngredient6: string
    strIngredient7: string
    strIngredient8: string
    strIngredient9: string
    price:number
}


export function StoreItem({ idMeal, strMeal,strMealThumb, strIngredient1,strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6, strIngredient7, strIngredient8,strIngredient9, price }: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity:number = getItemQuantity(idMeal);
    return <Card className='h-100 shadow border-0 text-center'>
        <Card.Img variant='top' src={strMealThumb} height='250px' style={{ objectFit: 'cover' }}></Card.Img>
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex-column justify-content-between align-item-baseline mb-4'>
                <h5 className='fs-2 item-name'>{strMeal}</h5>
                <p className=' text-muted item-details'>{`${strIngredient1},${strIngredient2}, ${strIngredient3}, ${strIngredient4},${strIngredient5},${strIngredient6}, ${strIngredient7}, ${strIngredient8},${strIngredient8} `}</p>
            </Card.Title>
            <div className='mt-auto'>
                <span className='ms-2 text-muted  item-price'>{formatCurrency(price)}</span>

                {quantity === 0 ? (
                    // <Button className='w-100' onClick={()=>increaseCartQuantity(idMeal)}>Add to Cart</Button>
                    <Button  onClick={()=>increaseCartQuantity(idMeal)}
                    style=
                    {{ width: "3rem", height: "3rem", position: "relative" ,color:'var(--primary-color)',borderColor: 'var(--primary-color)'}}
                    variant="bg-white outline-danger" className='rounded-rectangle ms-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div className="rounded-circle d-flex justify-content-center align-item-center"
                        style={{ backgroundColor:'var(--primary-color)', color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%,25%)" }}>
                       + 
                    </div>
                </Button>
                ) :
                    <div className='d-flex align-items-center flex-column' style={{gap:'.5rem'}}>
                    <div className='d-flex align-items-center justify-content-center' style={{gap:'.5rem'}}>
                    <Button  variant='dark' onClick={()=>decreaseCartQuantity(idMeal)}>-</Button>
                    <div>
                    <span className='fs-3'>{quantity}</span>
                    {/* In Cart */}
                    </div>
                    <Button variant='dark' onClick={()=>increaseCartQuantity(idMeal)} >+</Button>
                    </div>
                    <Button variant='danger' size="sm" onClick={()=>removeFromCart(idMeal)}>Remove</Button>
                    </div>
                }
            </div>
        </Card.Body>
    </Card>

}