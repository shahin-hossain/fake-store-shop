import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manubar from './components/Manubar/Manubar';
import Allproducts from './components/AllProducts.js/Allproducts';
import { useEffect, useState } from 'react';
import AOS from 'aos'; //3rd party library
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () => {
    setCount(count + 1);
  }
  //3rd party Library for animation
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Manubar count={count}></Manubar>
      <Allproducts setCartCount={setCartCount}></Allproducts>
    </div>
  );
}

export default App;
