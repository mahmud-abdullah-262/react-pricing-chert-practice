import "./App.css";
import BarChart from "./components/chert/MyBarChart";
import Chart from "./components/chert/Chart";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";
import MyBarChart from "./components/chert/MyBarChart";

const pricingPromise = fetch('pricingOption.json').then(res => res.json())

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
      <Chart></Chart>
      <MyBarChart></MyBarChart>
   
    </>
  );
}

export default App;
