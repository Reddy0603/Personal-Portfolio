import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <h1>Hey hello</h1>
      <PortfolioContainer />
    </div>
  );
}
export default App;
