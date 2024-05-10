import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exchanges" element={<Exchanges/>}/>
      <Route path="/coins" element={<Coins/>}/>
      <Route path="/coins/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer/></BrowserRouter>
  );
}

export default App;
