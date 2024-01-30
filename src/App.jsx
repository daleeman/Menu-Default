import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Categories from "./components/categories";
import Foodlist from "./components/foodlist";
import Footer from "./components/footer";
import CartList from "./components/CartList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <div>
        <div className="grid-col-1 md:grid grid-flow-col">
          <div className="hidden md:block bg-blue-500 col-span-1 shadow-lg">
            <Categories></Categories>
          </div>
          <div className="col-span-4">
            <Foodlist></Foodlist>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <CartList></CartList>
    </>
  );
}

export default App;
