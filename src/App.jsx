import "./App.css";
import BarChart from "./components/chert/MyBarChart";
import Chart from "./components/chert/Chart";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";
import MyBarChart from "./components/chert/MyBarChart";
import axios from "axios";
import { Suspense } from "react";
import MarksChart from "./components/marksChart/MarksChart";

const pricingPromise = fetch('pricingOption.json').then(res => res.json());
const marksPromise = axios.get('marksData.json')

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Suspense className="mx-auto" fallback={
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: '200px'}}>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      }>
         <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
      </Suspense>

      <Suspense fallback={ <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: '200px'}}>
          <span className="loading loading-ring loading-lg"></span>
        </div>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
     
      <Chart></Chart>
      <MyBarChart></MyBarChart>
      
   
    </>
  );
}

export default App;
