import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AddItem from './AddItem'

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
            <Route exact path="/snacks">
              <Menu items={items.snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={items.drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/add">
              <AddItem  type="snacks" />
            </Route>
            <Route path="/drinks/add">
              <AddItem  type="drinks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={items.snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem items={items.drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <p>Oops. That's not here, but click Snacks or Drinks for some tasty options!</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
