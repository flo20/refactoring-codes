import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Menu from "./component/Menu/Menu";
import TravelBlog from "./component/TravelBlog/TravelBlog";

function App() {
  return (
    <div>
      <Navbar />
      <TravelBlog />
    </div>
  );
}

export default App;
