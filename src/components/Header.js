import { Link } from "react-router-dom";
import Cart from "./Cart";
import './styles.css';
import { Carts } from "../Context";
import { useContext } from 'react';

const Header = () => {

  const {cart}  = useContext(Carts);
  return(
 
    
   <nav className="primary-nav">
    <span className="header">Context api tutorial</span>
    <ul className="nav">
     <li >  
      <Link to="/">Home Page</Link>
     </li> 
    <li >
      <Link to="/cart">Cart ({cart.length}) </Link>
    </li>
   </ul>
  </nav>

  
);
}

export default Header;