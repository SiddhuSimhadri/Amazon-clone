import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{basket, user} ] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img  className='checkout__add' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>

            <div>
                <h4>Hello, {user?.email}</h4>
                <h2  className='checkout__title'>
                    Your Shopping Basket
                </h2>

                {basket.map(item =>
                    <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                )}
            </div>
        </div>

        <div className='checkout__right right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout