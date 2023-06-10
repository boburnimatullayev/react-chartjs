import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import options from "./Optons"
import "./App.css"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
)

function App() {

  const data = {
    labels: ["Yanvar","Febral","Mart","Aprel","May"],
    datasets:[
      {
        label:"Buzulganlar",
        data:[12,34,56,78,10],
        backgroundColor:"red",
        borderRadius:10
      },
      {
        label:"Tuzatilganlar",
        data:[23,43,23,78,2],
        backgroundColor:"blue"
      }
    ]
  }
  return <div className="App">

     <Bar data = {data}  options={options}/>
  </div>;
}

export default App;
