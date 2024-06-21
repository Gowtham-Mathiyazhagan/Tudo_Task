import React, { createContext, useContext, useReducer } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Scroller from "./Components/Scroller";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import { Route, Routes } from "react-router-dom";

// createContext

const LevelData = createContext(null)
const LevelDispatchFun = createContext(null)

const App = () => {
  const [cartVal, dispatch] = useReducer(cartReducer,[]);
  console.log(cartVal)
  return (
    <LevelData.Provider value={cartVal}>
    <LevelDispatchFun.Provider value={dispatch}>
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Scroller />
              <Card />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
    </LevelDispatchFun.Provider>
    </LevelData.Provider>
  );
};

// Custom hooks

function useCartval () {
  return useContext(LevelData)
}

function useDispatch(){
  return useContext(LevelDispatchFun)
}

// reducer function
function cartReducer(initialvalue,action){
 switch(action.type)
 {
  case "add" :{
 const existing = initialvalue.findIndex((val)=> val.id == action.id)

    if(existing!==-1) {
   return initialvalue
  }
  return [...initialvalue,action]
  
  }
  case "plus":{

    return initialvalue.map(val=>val.id===action.id ? {...val,rate:val.rate+120,times:val.times++} : val)
  }
  case "minus":{
    return initialvalue.map(val=>val.id===action.id ? {...val,rate:val.rate-120,times:val.times--} : val)
  }
  case "delete":{
    return initialvalue.filter(val=> val.id !== action.id );
     
  }      

  default:{
    throw Error("Unkown type :" + action.type)
  }
 }
}

export  {App,useCartval,useDispatch};
