import React from "react";
import CandyList from "./CandyList";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <CandyList />
      </main>
    </div>
  );
};

export default Root;
