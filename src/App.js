import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import Footer from "./Component/Footer/Footer";
import Payment from "./Component/Payment/Payment";
import Orders from "./Component/Orders/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./config/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Subheader from "./Component/Subheader/Subheader";

const promise = loadStripe(
  "pk_test_51HUvkbH2WdavAV06qTpKanFGKbwCOFM3BorXWhy6CGWY07G9TgCE9jalKGuZvOPndanss7QDaXTeiPytGiL5pcXS0069E9Hri0"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //if you keep [] empty, it will only run once when app component is loaded
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);
      if (authUser) {
        //user logged in/or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Subheader />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Subheader />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Subheader />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
