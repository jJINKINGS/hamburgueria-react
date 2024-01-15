import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-toastify";


export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const localCartList = localStorage.getItem("@MYCARTBURGUER");
  const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : []);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(JSON.parse(localCartList)? JSON.parse(localCartList).length : 0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getMenu = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMenu();

  }, []);

  const addOrder = (product) => {
    try {
      if (!cartList.some(element => element.id === product.id)) {
        setCartList([...cartList, product]);
        setAmount(amount + 1);
        toast.success("Este item foi adicionado ao carrinho!")
      }
      else {
        toast.error("Item já adicionado ao carrinho!")
      }

    } catch (error) {
      console.log(error)
      toast.error("Ops, aconteceu algum erro na aplicação!")
    }
  }

  useEffect(() => {
    localStorage.setItem("@MYCARTBURGUER", JSON.stringify(cartList))
  }, [cartList]);

  const removeOrder = (product) => {
    try {
      const newCart = cartList.filter(element => element.id !== product.id)
      setCartList(newCart);
      setAmount(amount - 1);
      toast.success("Item removido com sucesso!")
    } catch (error) {
      console.log(error);
    }
  }

  const removeAll = () => {
    setCartList([]);
    setAmount(0);
    toast.success("Agora o seu carrinho está vazio!")
  }

  return (
    <>
      <Header setIsOpen={setIsOpen} amount={amount} />
      <main>
        <ProductList productList={productList} loading={loading} addOrder={addOrder} cartList={cartList} />
        {isOpen ? <CartModal cartList={cartList} setIsOpen={setIsOpen} removeOrder={removeOrder} removeAll={removeAll} /> : null}
      </main>
    </>
  );
};
