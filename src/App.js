import React from "react";

import Drawer from "./components/drawer";
import AppContext from "./context";

import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Orders from "./pages/orders";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <svg />
          <div className="headerInfo">
            <h3>Sneakers World</h3>
            <p>The best sneakers in the world!</p>
            <p>The best sneakers in the world!</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>120 $</span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="component"></div>
    </div>
  );
}

export default App;
