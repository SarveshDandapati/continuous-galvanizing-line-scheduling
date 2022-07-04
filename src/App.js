import "./App.css";
import CreateSchedule from "./components/CreateSchedule";
import OrderSearch from "./components/OrderSearch";
import Table from "./components/Table";
import "./css/create-schedule.css";
import "./css/order-search.css";
import "./css/table.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:3001/db")
    .then((response) => {
      setData(response.data.db);
    });
  }, []);

  return (
    <div className="wrapper">
      <CreateSchedule />
      <OrderSearch />
      <Table data={data} />
    </div>
  );
}

export default App;
