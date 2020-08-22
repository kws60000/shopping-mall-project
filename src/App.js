import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Sider from "./components/Sider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sider />
        <div>
          <Header />

          <Routes />

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
