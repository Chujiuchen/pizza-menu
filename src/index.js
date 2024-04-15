import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Chicken Orleans",
    ingredients: "Tomato, mozarella, chicken, and orleans cheese",
    price: 10,
    photoName: "pizzas/aoerliang.png",
    soldOut: false,
  },
];

// The App functional component renders the main container for the pizza menu app
function App() {
  return (
    <div className="container">
      <Header /> {/* Renders the Header component */}
      <Menu /> {/* Renders the Menu component */}
      <Footer /> {/* Renders the Footer component */}
    </div>
  );
}

// The Pizza functional component renders a single pizza item
// Define a React functional component named Pizza
function Pizza({ pizzaObj }) {
  // Log the pizzaObj to the console
  console.log(pizzaObj);
  // Return the JSX for displaying pizza details
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "Sold Out" : `Price: ${pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}

// The Menu functional component renders the menu section with pizza items
function Menu() {
  const pizzas = pizzaData.length; // Retrieves the length of the pizzaData array
  // const pizzas = [];
  return (
    <main className="menu">
      <h1>Menu</h1>
      {pizzas > 0 ? (
        <>
          <p>We have {pizzas} pizzas available for you to choose from.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> // Renders a Pizza component for each pizza item
            ))}
          </ul>
          <button className="btn">Place Order</button>
        </>
      ) : (
        <p>We are sorry, there are no pizzas available at this time.</p>
      )}
    </main>
  );
}

// The Header functional component renders the header section of the app
function Header() {
  return (
    <header className="header footer">
      <h1>Hello this is a React Pizza Menu!</h1>
    </header>
  );
}

// The Footer functional component renders the footer section of the app
function Footer() {
  const date = new Date().getHours();
  console.log(date);
  const openHour = 10;
  const closeHour = 22;
  const isOpen = date >= openHour && date <= closeHour;
  const status = isOpen ? "Open" : "Closed";
  const message = `The Pizza Menu is currently ${status} from ${openHour}:00 to ${closeHour}:00.`;
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? <p>{message}</p> : <p>{message}</p>}
      </div>
    </footer>
  );
}

// Renders the root component of the app using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />); // Renders the App component as the root component
