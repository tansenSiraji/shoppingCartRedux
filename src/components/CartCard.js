import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const dispatch = useDispatch();
  const {id, name, price, image} = product;
  const productLengthArray = useSelector(state => state.cartState.cartList.filter(item => item.id === id));
  const qty = productLengthArray.length;

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productQty">{qty}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => dispatch(remove(product))}>Remove</button>
      </div>
  )
}
