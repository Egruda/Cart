import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shopcart from "./Shopcart";
import Home from "./components/Home/Home";
import { useState } from "react";
import { useEffect } from "react";



const Router = () => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing/`);
        if(!response.status >= 400) {
          throw new Error(
            'This is a server error'
          );
        }
        let json = await response.json();
        let list = json.map(item => { 
          return ({id: item.id, title: item.title, price: item.price, description: item.description, image: item.image, quantity: 0})
        })
        setItems(list);
        setError(null);
      } catch(err) {
        setError(err.message);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const cart = items ? items.filter(item => item.quantity > 0) : null;
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App cart={cart}/>,
        children: [
            { index: true, element: <Home />},
            { path: "shopcart", element: <Shopcart items={items} cart={cart} setItems={setItems} loading={loading} error={error} />},
        ]
      }
    ]);

return <RouterProvider router={router} />;
};

export default Router;