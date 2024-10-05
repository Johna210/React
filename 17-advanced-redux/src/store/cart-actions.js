import { cartActions } from './cart-slice';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch();
    const sendRequest = async () => {
      const response = await fetch(
        'https://carts-21e9c-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCardData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://carts-21e9c-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch card data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      console.log(error);
    }
  };
};
