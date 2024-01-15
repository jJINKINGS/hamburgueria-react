import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productList, loading, addOrder, cartList }) => {
   return (
      <>
         {loading ? (
            <p>Carregando Cardápio...</p>
         ) : (
            <ul className={style.ulContainer}>
               <div className={style.ulDiv}>
                  {productList.map((product) => (
                     <ProductCard key={product.id} product={product} addOrder={addOrder} cartList={cartList} />
                  ))}
               </div>
            </ul>
         )}
      </>
   );
};
