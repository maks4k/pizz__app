import "../style/app.scss";
import Home from "../pages/Home";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";

import { useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";


function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => { 
    fetch("https://67cece81125cd5af757c0c7a.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      // .finally(() => setLoading(false)) // исправлено: используя false вместо !loading
      .catch((error) => {
        alert(`ошибка запроса на сервер ${error.name}, ${error.message}`); // Обработка ошибок
      });
  }, []);

  return (
  
    <ErrorBoundary>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
          <Routes> 
          <Route path="/home" element={<Home pizzas={pizzas}/>}/>
          <Route path="/cart" element="Cartw"/>
          <Route path="*" element="NotFound"/>
          </Routes>
          </div>
        </div>
      </div>
    </ErrorBoundary>
    
  );
}

export default App;