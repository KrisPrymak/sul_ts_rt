import Header from "./components/Header/Header";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import ItemPage from "./components/ItemPage/ItemPage";
import BasketPage from "./components/BasketPage/BasketPage";
import AdminPanel from './components/AdminPanel/AdminPanel'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Routes>
      <Route path='/' element={<Catalog />} />
        <Route path='/basketPage' element={<BasketPage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/item/:barcode' element={<ItemPage />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
