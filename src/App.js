
import AprCarosuel from "./Components/aprCarosuel";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header";
import Plots from "./Components/plots";
import Home from "./Components/home";
import Footer1 from "./Components/footer";
import "./CSS/common.css";
import ConstContent from "./Components/constContent";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <AprCarosuel />
      <Plots />
      <ConstContent />
      <Footer1 />
    </div>
  );
}

export default App;
