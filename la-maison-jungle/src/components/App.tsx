import React, { useState, useEffect } from "react";
import Banner from "./Banner.tsx";
import logo from '../img/leaf+1.png'
import Cart from "./Cart.tsx";
import ShoppingList from "./ShoppingList.tsx";
import Footer from "./Footer.tsx";
import '../assets/Layout.css'

function App() {
	const saveCard = localStorage.getItem('cart');
	const [cart, updateCart] = useState(saveCard ? JSON.parse(saveCard) : []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
			<Footer />
		</div>
	)
}

export default App;
