import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import CartContextProvider from './components/context/CartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
        <Header />
        <Main />
        <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
