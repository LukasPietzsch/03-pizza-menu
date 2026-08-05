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
            <h1 style={style}>Fast React Pizza co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            { pizzaData.length > 0 ?
                (<ul className="pizzas">
                {pizzaData.map((item) => (
                    <Pizza
                        pizzaObj = {item}
                        key={item.name}
                    />
                ))}
                </ul>) :
                (<p>No Menu Is Available (yet), please come back later</p>)
            }
        </main>
    );
}

function Pizza( props ) {
    const pizza = props.pizzaObj;

    if (pizza.soldOut) {
        return null;
    }

    return (
        <li className="pizza">
            <img src= {pizza.photoName} alt = {pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.price + 3}</span>
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

function Order(props) {
   return (<div className="order">
           <p>
               We're currently open till {props.closeHour}:00. Come visit us or order here:
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