import './App.css';
import CreateSchedule from "./components/CreateSchedule";
import OrderSearch from "./components/OrderSearch";
import Table from "./components/Table";
import './css/create-schedule.css';
import './css/order-search.css';
import './css/table.css';
function App() {
  return (
    <div className='wrapper'>
      <CreateSchedule/>
      <OrderSearch/>
      <Table/>
      {/* <section className='order-summary'></section>
      <section className='order-table'></section> */}
    </div>
  );
}

export default App;
