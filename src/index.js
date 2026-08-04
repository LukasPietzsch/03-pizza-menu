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

function Pizza() {
    return (
        <div className="container">
            <img src="pizzas/spinaci.jpg" alt = "Pizza spinaci" />
            <h3>Pizza Pizza!</h3>
            <p>Tomato</p>
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
            <Pizza />
            <Pizza />
            <Pizza />
        </main>
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