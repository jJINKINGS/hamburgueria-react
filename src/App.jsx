import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={2 * 1000} theme="dark" />
    </>
  )
}

export default App
