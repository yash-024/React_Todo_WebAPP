import "./App.css";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Switch, Route } from "react-router-dom";
import HomeTodo from "./Components/Todos/HomeTodo";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserList from "./Components/UserList";
import { db, auth } from "./firebase";
import { useEffect, useState } from "react/cjs/react.development";
import { useAuth } from "./Components/Contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import Profile from "./Components/User/Profile";

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header title="Todo List" />
      <Switch>
        <Route path="/todo" exact component={HomeTodo} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/userlist" component={UserList} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
