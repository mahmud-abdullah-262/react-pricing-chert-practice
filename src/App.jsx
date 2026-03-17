import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";

const pricingPromise = fetch('pricingOption.json').then(res => res.json())

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
   
    </>
  );
}

export default App;
