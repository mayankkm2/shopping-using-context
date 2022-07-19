import faker from 'faker';
import { useContext, useState } from 'react';
import SingleProduct from './SinlgeProduct';
import './styles.css';
import { Carts } from '../Context';

faker.seed(100);

const Home = ({ }) => {

   console.log(useContext(Carts));
   const productsArray = [...Array(20)].map(() => ({  //jst like genertin a json file
      id: faker.datatype.uuid(), //random id generate
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),

   }));
   //console.log(productsArray);


   const [products] = useState(productsArray);//storin in state

   //console.log(cart);
   return <div className='productContainer'> {products.map((prod => (
      <SingleProduct prod={prod} key={prod.id} />

   )))}</div>


}



export default Home;