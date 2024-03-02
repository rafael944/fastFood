import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {
  currentQuantityById,
  decreaseItemQunatity,
  increaseItemQuantity,
} from "./CartSlice";

export default function UpdateQuantityItem({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQunatity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
