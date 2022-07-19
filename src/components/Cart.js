import { useEffect, useState,useContext } from "react";
import SingleProduct from "./SinlgeProduct";
import { Carts} from "../Context";


const Cart= () =>{

   const [total,setTotal] = useState();
  
   const {cart,setCart}  = useContext(Carts);
   useEffect( ()=> {//to calculate total of our cart,use reducfn
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0));

   },[cart]);

    return(//ll show itmes inside our cart
      <div>
        <span style={{ fontSize :30}}> My Cart</span>
        <br/>
        <span style={{fontSize: 30}}>Total: {total}</span>
        <div className="productContainer">
         {cart.map( (prod) => (
         <SingleProduct
          prod={prod}
          key={prod.id}
          cart={cart}
          setCart={setCart}/>
         ))} 
        </div>
      </div>
    );
}

export default Cart;

