import style from "./style.module.scss";

export const ProductCard = ({ product, addOrder, cartList }) => {

    const isOnCartList = cartList.some(element => element.id === product.id);

    return (
        <li className={`${style.cardLi} ${isOnCartList ? style.cardLiAdd : ""}`}>
            <div className={style.divImg}>
                <img src={product.img} alt={product.name} className={style.img} />
            </div>
            <div className={style.cardInfos}>
                <h3 className="titleCard">{product.name}</h3>
                <span className="titleCategoryCard">{product.category}</span>
                <span className="titlePriceCard">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button className="titleButtonCard" onClick={() => addOrder(product)}>Adicionar</button>
            </div>
        </li>
    )
}
