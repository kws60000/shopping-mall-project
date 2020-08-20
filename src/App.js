import React from "react";
import Sider from "./components/Sider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sider />
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
