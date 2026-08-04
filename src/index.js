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
            <Pizza
                name = "Pizza Salamino"
                ingredients = "Tomato, mozarella, and pepperoni"
                price = {15}
                photoName = "pizzas/salamino.jpg"
                soldOut = {true}
            />
            {/*<Pizza />*/}
            {/*<Pizza />*/}
        </main>
    );
}

function Pizza( props ) {
    return (
        <div className="container">
            <img src= {props.photoName} alt = {props.name} />
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <span>{props.price + 3}</span>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();

    const openHour = 7;
    const closeHour = 15;

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