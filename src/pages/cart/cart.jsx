import React, { useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import "./cart.css"

import { useNavigate } from 'react-router-dom'


const Cart = (props) => {
  const {cartItems, getTotalAmount} = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()
  return (
    <div className="cart">
      <div><h1>Your Cart Items</h1></div>
      <div className="cartitems">
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] !== 0){
            return <CartItem key = {Product.id} data = {Product}/>
          }
        })}
      </div>
      {totalAmount > 0 ?(
      <div className="checkout">
        
        <p>Subtotal ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping </button>
        <button>Checkout </button>
      </div>
      ):(
       <h1>Your cart is Empty</h1>
        )}
    </div>
  )
}

export default Cart
