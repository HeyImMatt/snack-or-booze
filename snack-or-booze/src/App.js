import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState({});

  useEffect(() => {
    async function getItems() {
      let items = await SnackOrBoozeApi.getItems();
      setItems(items);
      setIsLoading(false);
    }
    getItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar numSnacks={items.snacks.length} numDrinks={items.drinks.length} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={items.snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={items.snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={items.snacks} cantFind="/snacks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
