import { Link } from "react-router-dom";
import { totalCartPrice, totalCartQuantity } from "./CartSlice";
import { useSelector } from "react-redux";
function CartOverview() {
  const totalCart = useSelector(totalCartQuantity);
  const totalPrice = useSelector(totalCartPrice);
  if (!totalCart) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCart} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
