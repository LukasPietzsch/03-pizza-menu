import React from "react";
import ReactDOM from "react-dom/client";

import pizzaData from "./data";

function App() {
    return (
        <div>
            <h1>Hello World!</h1>
            <Pizza />
            <Pizza />
            <Pizza />
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);