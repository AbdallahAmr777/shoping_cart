import React from "react";
import { Container} from "react-bootstrap";
import {Routes ,Route} from "react-router-dom"
import Navbar from "./Component/Navbar"
import Store from "./Component/Store"
import ShoppingCartProvider from "./Component/ShoppingCartContext";


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Container className="md-4">
        <Routes>
        
          <Route path="/" element={<Store/>}/>
          <Route path="/store" element={<Store/>}/>
        </Routes>

      </Container>

    </ShoppingCartProvider>
  );
}

export default App;
