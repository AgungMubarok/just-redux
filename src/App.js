import React, { useEffect, useState } from 'react';

import store from './store/store';
import './App.css';

import {
  buyOneTea, 
  buyOneCappucino, 
  buyOneCoffeeMocha, 
  buyOneChocolate,
  resetProducts
} from './actions/productAction.js'

import {
  addOneTea,
  addOneChocolate,
  addOneCappucino,
  addOneCoffeeMocha,
  resetSaldo
} from './actions/saldoAction.js'

function App() {

 const products = store.getState().product;
 let { saldo } = store.getState().saldo;

 const [product, setProducts] = useState(products)
 const [saldoo, setSaldo] = useState(saldo)
 console.log(product);
 console.log(saldoo);

  useEffect(() => {
    const products = store.getState().product;
    let { saldo } = store.getState().saldo;

    const product = products
    const saldoo = saldo

    setProducts(product)
    setSaldo(saldoo)

    store.subscribe(() => {
      const products = store.getState().product;;
      let { saldo } = store.getState().saldo;
   
      const product = products
      const saldoo = saldo

      setProducts(product)
      setSaldo(saldoo)
    });
  }, [])

  const handleOrderCoffeeMocha = () => {
    store.dispatch(buyOneCoffeeMocha)
    store.dispatch(addOneCoffeeMocha)
   
  }
  const handleOrderCappucino = () => {
    store.dispatch(buyOneCappucino)
    store.dispatch(addOneCappucino)
  }
  const handleOrderChocolate = () => {
    store.dispatch(buyOneChocolate)
    store.dispatch(addOneChocolate)
  }
  const handleOrderTea = () => {
    store.dispatch(buyOneTea)
    store.dispatch(addOneTea)
  }
  const handleReset = () => {
    store.dispatch(resetSaldo)
    store.dispatch(resetProducts)
  }

  return (
    <div className="App">
      <h1>TOKO KOPI IMPACT</h1>
      <div className="header">
        <div onClick={handleReset}>DELETE</div>
        <div> SALDO Rp.{saldo}</div>
      </div>
      <h1>PRODUCTS</h1>
      <div className="products">
        <div onClick={handleOrderCoffeeMocha}>Coffe Mocha ({products.coffeeMocha.stock}) Rp.{products.coffeeMocha.price} </div>
        <div onClick={handleOrderCappucino}>Cappucino ({products.cappucino.stock}) Rp.{products.cappucino.price} </div>
        <div onClick={handleOrderChocolate}>Chocolate ({products.chocolate.stock}) Rp.{products.chocolate.price} </div>
        <div onClick={handleOrderTea}>Tea ({products.tea.stock}) Rp.{products.tea.price} </div>
      </div>
    </div>
  );
}

export default App;
