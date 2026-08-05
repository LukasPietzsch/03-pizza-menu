import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

import pizzaData from "./data";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const style = {color: "red", fontSize: '38px', textTransform: "uppercase"};
    const style = {color: "red"};

    return (
        <header className="header">
            <h1 style={style}>2 Fast 2 Pizza GmbH</h1>
        </header>
    );
}

function Menu() {
    // const pizzaData = [];
    return (
        <main className="menu">
            <h2>Our Menu</h2>


            { pizzaData.length > 0 ?
                (<React.Fragment>
                    <p>Authentic Italian cuisine</p>
                    <ul className="pizzas">
                    {pizzaData.map((item) => (
                        <Pizza
                            pizzaObj = {item}
                            key={item.name}
                        />
                    ))}
                    </ul>
                </React.Fragment>) :
                (<p>No Menu Is Available (yet), please come back later</p>)
            }
        </main>
    );
}

function Pizza({pizzaObj}) {
    const pizza = pizzaObj;

    // if (pizza.soldOut) {
    //     return null;
    // }

    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src= {pizza.photoName} alt = {pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ?  'Sold out' : pizza.price + ' €'}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();

    const openHour = 7;
    const closeHour = 17;

    const isOpen = hour >= openHour && hour < closeHour;

    return <footer className="footer">
        {isOpen ?  <Order closeHour={closeHour} /> : (<p>We are currently closed, please come back at {openHour}:00</p>)}
    </footer>;
}

function Order({closeHour}) {
   return (<div className="order">
           <p>
               We're currently open till {closeHour}:00. Come visit us or order here:
           </p>
           <button className="btn">Order</button>
       </div>
   );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);