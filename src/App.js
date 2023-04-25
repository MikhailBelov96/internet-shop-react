import React from "react";

import Drawer from "./components/drawer";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

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
