import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';

import { userRequest } from '../request-methods';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Footer from '../layout/Footer';
import CartProduct from '../components/CartProduct';
import Navbarr from '../layout/Navbarr';

const ShoppingCart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const cart = useSelector((store) => store.cart);

  let totalAmount = 0;
  cart.products.map((p)=> totalAmount+=(p.quantity*p.price))
  let totalQuantity = 0;
  cart.products.map((p)=> totalQuantity+=(p.quantity))
  const continueShoppingClickHandler = () => {
    history.goBack();
  };

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const checkout = async () => {
      try {
        await userRequest.post('/checkout', {
          tokenId: stripeToken.id,
          amount: totalAmount * 100,
        });
        history.push('/orders');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && totalAmount > 1 && checkout();
  }, [stripeToken]);
  return (
    <>
      {/* <Announcement /> */}
      <Navbarr />
      <section className='px-8 py-4'>
        <h1 className='uppercase mt-4 mb-8 text-4xl text-center'>your bag</h1>
        <div className='grid sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
          <div>
            <a
              onClick={continueShoppingClickHandler}
              className='text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500'
            >
              continue shopping
            </a>
          </div>
          <div className='flex'>
            <p className='mr-4 cursor-pointer'>
              Shopping Bag ({totalQuantity})
              {/* ({cart.products && cart.products.length}) */}
            </p>
            {/* <a className='underline cursor-pointer'>Your Wishlist (0)</a> */}
          </div>
          <div>
         
            <StripeCheckout
              name='ShopEase'
              billingAddress
              shippingAddress
              description={`Your total is ₹${totalAmount}`}
              amount={totalAmount * 100}
              currency='RUPEES'
              token={onToken}
              disabled={totalAmount == 0}
              stripeKey="pk_test_51N7EnVSJUyeR6wOe8BNiyMatIQYdnB8ufkecTJBxqrrwkAJMXDUxcsNlUwthV2YZswAKHnX8dBrkUNSVsEcvKcDG00UcGcX6Ll"
            >
              <a className='text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 hover:text-black hover:border-black hover:bg-white bg-black text-white transition ease-out duration-500'>
                checkout now
              </a>
            </StripeCheckout>
         
          </div>
        </div>
        <div className='my-12 grid gap-8 lg:grid-cols-[2fr_1fr]'>
          <div>
            {cart.products.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))}
          </div>
          <div>
            <div className='border rounded-xl p-4'>
              <h1 className='uppercase text-4xl mb-8'>order summary</h1>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>subtotal</span>
                <span>
                {/* $ {cart.totalPrice} */}
                ₹{totalAmount}
                </span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>estimated shipping</span>
                <span>₹ 00.00</span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>shipping discount</span>
                <span>-₹ 00.00</span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize font-bold text-2xl'>Total</span>
                <span className='font-bold text-2xl'>
                ₹{totalAmount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShoppingCart;
