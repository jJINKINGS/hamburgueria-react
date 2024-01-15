import { MdDelete } from "react-icons/md";
import style from "./style.module.scss"

export const CartItemCard = ({ product, removeOrder }) => {

   return (
      <li className={style.liDivContainer}>
         <div className={style.divContainer}>
            <div className={style.imgContainer}>
               <img src={product.img} alt={product.name} className={style.img} />
            </div>
            <div className={style.titleDiv}>
               <h3 className={style.titleCard}>{product.name}</h3>
               <span className={style.titlePrice}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button onClick={() => removeOrder(product)} aria-label="delete" title="Remover item">
            <MdDelete size={21} color={"var(--color-grey2)"} />
         </button>
      </li>
   );
};
