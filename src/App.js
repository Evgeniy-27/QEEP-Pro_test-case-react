import "./App.css";

import orders1 from "./Data/orders-1.json";
import orders2 from "./Data/orders-2.json";
import AnalyticsDashboard from "./Components/AnalyticsDashboard";

function App() {
  return (
    <div className="App">
      <AnalyticsDashboard orders1={orders1} orders2={orders2} />
    </div>
  );
}

export default App;

