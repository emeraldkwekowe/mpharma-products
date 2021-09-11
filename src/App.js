import Routes from "./routes/index";

//General app styling
import "./assets/css/default.scss";
import "./assets/css/animate.scss";

//Toasts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
