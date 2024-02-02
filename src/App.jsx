import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Categories from "./components/categories";
import Foodlist from "./components/foodlist";
import Footer from "./components/footer";
import CartList from "./components/CartList";
import { DefaultContext } from "./context/context";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [globalState, setglobalState] = useState({
    categories: ["Breakfast", "Brunch", "Lunch", "Snacks", "Dinner"],
    foodList: [
      {
        id: 1,
        category: "Breakfast",
        foodTitle: "Poached Eggs",
        price: 100,
      },
      {
        id: 2,
        category: "Breakfast",
        foodTitle: "Poached Eggs",
        price: 100,
      },
      {
        id: 3,
        category: "Breakfast",
        foodTitle: "Poached Eggs",
        price: 100,
      },
    ],
    selectedCategory: "",
    cartList: [],
  });
  // const [categories, setCategories] = useState([
  //   "Breakfast",
  //   "Brunch",
  //   "Lunch",
  //   "Snacks",
  //   "Dinner",
  // ]);
  // const [foodList, setfoodList] = useState([
  //   {
  //     id: 1,
  //     category: "Breakfast",
  //     foodTitle: "Poached Eggs",
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     category: "Breakfast",
  //     foodTitle: "Poached Eggs",
  //     price: 100,
  //   },
  //   {
  //     id: 3,
  //     category: "Breakfast",
  //     foodTitle: "Poached Eggs",
  //     price: 100,
  //   },
  // ]);
  // const [selectedCategory, setSelectedCategory] = useState();
  // const [cartList, setCartList] = useState([]);
  return (
    <>
      <DefaultContext.Provider value={globalState}>
        <BrowserRouter>
          <div className="fixed top-0 w-full z-10">
            <Header cartCount={globalState.cartList.length} />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="mt-12">
                    <div className="grid-col-1 md:grid grid-flow-col">
                      <div className="hidden md:block bg-blue-500 col-span-1 shadow-lg">
                        <Categories
                          setSelectedCategory={setglobalState}
                        ></Categories>
                      </div>
                      <div className="col-span-4">
                        <Foodlist
                          selectedCategory={globalState.selectedCategory}
                          setCartList={setglobalState}
                        ></Foodlist>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/cartlist"
              element={
                <div className="mt-14">
                  <CartList cartList={globalState.cartList} />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="mt-14">
                  <About />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="mt-14">
                  <Contact />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </DefaultContext.Provider>
    </>
  );
}

export default App;
