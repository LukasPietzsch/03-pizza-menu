import React from "react";
import ReactDOM from "react-dom/client";

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
        <div>
            <img src="pizzas/spinaci.jpg" alt = "Pizza spinaci" />
            <h2>Pizza Pizza!</h2>
            <p>Tomato</p>
        </div>
    );
}

function Header() {
    return (
        <h1>Fast React Pizza co.</h1>
    );
}

function Menu() {
    return (
        <div>
            <h2>Our Menu</h2>
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
}

function Footer() {
    return <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>;

    // return React.createElement("footer", null, "We're currently online!");
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);