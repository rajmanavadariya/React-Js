import logo from './logo.svg';
import './App.css';
import Product from './Product'


function App() {
  const posts = [
    {id : 1 , name :"Camara" , img : "https://www.wordstream.com/wp-content/uploads/2021/07/product-photography-lead-image_800x.jpg"},
    {id : 2 , name :"Golden Sunrise" , img : "https://iili.io/H8Y7WEg.webp"},
    {id : 3 , name :"Rainforest Rhapsody" , img : "https://iili.io/H8Y7kTN.webp"},
    {id : 4 , name :"Harvest Moon" , img : "https://iili.io/H8Y7X4a.webp"},
    {id : 5 , name :"Wildfire" , img : "https://iili.io/H8Y7r4s.webp"},
    {id : 6 , name :"Walnut Wonder" , img : "https://iili.io/H8Y7gGn.webp"},
    {id : 7 , name :"Breezy Beans" , img : "https://iili.io/H8Y7lpV.webp"},
    {id : 8 , name :"Indo-Viet Roast" , img : "https://iili.io/H8Y7wYv.webp"},
    {id : 9 , name :"Ethiopian Yirgacheffe" , img : "https://iili.io/H8Y7VCF.webp"},
   
  ]
  return (
<>
<Product posts = {posts}/>
</>
  );
}

export default App;