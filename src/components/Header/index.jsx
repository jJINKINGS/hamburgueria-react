import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({ setIsOpen, amount }) => {

   return (
      <header className={style.headerContainer}>
         <div className={style.headerDiv}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div>
               <button onClick={() => setIsOpen(true)}>
                  <MdShoppingCart size={25} color={"var(--color-grey2)"} />
                  <span className={style.status}>{amount}</span>
               </button>
            </div>
         </div>
      </header>
   );
};
