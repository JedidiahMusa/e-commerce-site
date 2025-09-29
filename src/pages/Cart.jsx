import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-10 h-[50vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold">Your cart is empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 lg:px-20 py-10 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6">Shopping Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center justify-between border-b pb-4"
          >
            {/* Product info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg bg-gray-100"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm">Size: {item.size}</p>
                <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
              </div>
            </div>

            {/* Price + Remove */}
            <div className="flex items-center gap-6">
              <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id, item.size)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="px-4 py-2 rounded-2xl border border-gray-400 hover:bg-gray-100"
          >
            Clear Cart
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-2xl hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
