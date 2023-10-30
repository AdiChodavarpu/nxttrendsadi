// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let TotalAmount = 0

      const Amount = cartList.map(eachitem => {
        TotalAmount += eachitem.quantity * eachitem.price
        return TotalAmount
      })

      return (
        <div className="cartsummary-container">
          <h1 className="total-heading">
            Order Total: <span className="total-span">RS {TotalAmount}/- </span>
          </h1>

          <p className="items-count">{cartList.length} Items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
