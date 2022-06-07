
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
