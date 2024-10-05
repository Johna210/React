import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { fetchCardData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispach = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispach(fetchCardData());
  }, [dispach]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispach(sendCartData(cart));
  }, [cart, dispach]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
