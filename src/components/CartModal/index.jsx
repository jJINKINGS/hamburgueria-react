import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";
import { useEffect, useRef } from "react";

export const CartModal = ({ cartList, setIsOpen, removeOrder, removeAll }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);


   const modalRef = useRef(null);

   useEffect(() => {
      const handleOutClick = (event) => {
         if (!modalRef.current?.contains(event.target)) {
            setIsOpen(false);
         }
      }

      window.addEventListener("mousedown", handleOutClick);

      return () => {
         window.removeEventListener("mousedown", handleOutClick);
      }

   }, []);


   const buttonRef = useRef(null);

   useEffect(() => {
      const handleKeydown = (event) => {
         if (event.key === "Escape") {
            buttonRef.current?.click();
         }
      }

      window.addEventListener("keydown", handleKeydown);

      return () => {
         window.removeEventListener("keydown", handleKeydown);
      }
   })

   return (
      <div role="dialog" className={style.modalOverLay}>
         <div className={style.modalBox} ref={modalRef}>
            <div className={style.divHeader}>
               <h2 className={style.titleHeader}>Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar" ref={buttonRef}>
                  <MdClose size={21} color={"var(--color-grey2)"} />
               </button>
            </div>
            <div className={style.divUlContainer}>
               <ul className={style.ulContainer}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeOrder={removeOrder} />
                  ))}
               </ul>
            </div>
            <div className={style.divPriceContainer}>
               <div className={style.divPrice}>
                  <span className={style.total}>Total</span>
                  <span className={style.price}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={style.button} onClick={() => removeAll()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
