import './App.css';
import CreateSchedule from "./components/CreateSchedule";
import OrderSearch from "./components/OrderSearch";
import './css/create-schedule.css';
import './css/order-search.css';
function App() {
  return (
    <div className='wrapper'>
      <CreateSchedule/>
      <OrderSearch/>
    </div>
  );
}

export default App;
