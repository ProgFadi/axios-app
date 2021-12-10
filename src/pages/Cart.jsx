import Products from './Products';

const Cart = () => {
  const products = JSON.parse(localStorage.getItem('cart'));
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Cart;
