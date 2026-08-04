import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

import pizzaData from "./data";

function App() {
    return (
        <div>
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
    const fungi = pizzaData[3];

    console.log(fungi);

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            <ul className="pizzas">
            {pizzaData.map((item) => (
                <Pizza
                    pizzaObj = {item}
                    key={item.name}
                />
            ))}
            </ul>
        </main>
    );
}

function Pizza( props ) {
    const pizza = props.pizzaObj;
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

    // if (hour >= openHour && hour < closeHour)
    // {
    //     alert("We're currently open!");
    // }

    return <footer className="footer">{new Date().toLocaleTimeString()} We're currently {isOpen ? "open" : "closed"}!</footer>;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);