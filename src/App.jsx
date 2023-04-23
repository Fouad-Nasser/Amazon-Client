import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

import '../node_modules/font-awesome/css/font-awesome.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Product from "./components/product";

function App() {
 
  return (
    <>
    <Routes>
    <Route path='/Category' element={<Product />} />


    </Routes>
    
     </>
  );
}

export default App;

