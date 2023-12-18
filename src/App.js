import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import ProductProvider from './providers/productProvider';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">

      <ProductProvider>
        <Navbar />

        <Routes>

          <Route path="/" element={ <ProductList /> } />

          <Route path='/product-details' element={ <ProductDetails /> } />

        </Routes>
      </ProductProvider>
      
    </div>
  );
}

export default App;
