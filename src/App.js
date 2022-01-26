import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductPage from './containers/ProductPage';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="product">
            <Route path=":productId" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
