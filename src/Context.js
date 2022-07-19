import {createContext, useState}  from "react";

export const Carts = createContext();

const Context = ({children}) => {
    const [cart, setCart]= useState([]);//send these cart state to other comp by value,so cart,setcart become accesible inside whole appl. 
   return(
    <Carts.Provider value={{cart, setCart}}>
         {children}
    </Carts.Provider>

   ) 
};

export default Context;

//context -we r goin to wrap our indexjs wid help of it 
///childern/context=it means whatever its(context) goin to wrap around(ie,app),its goin to take all of dose childrn nd render ,inside it