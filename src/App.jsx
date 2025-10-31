import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [routineData, setRoutineData] = useState([]);
  const [period, setPeriod] = useState('Weekly');
  

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/data.json");
      setRoutineData(response.data);
    }

    fetchData();
  }, []);

  const routineDataComponents = routineData.map((routine) => {
    return (
      <div key={crypto.randomUUID()}>
        <div>{routine.title}</div>
        <div className={period === 'Daily' ? 'block' : 'hidden'}>
          <div>{routine.timeframes.daily.current}</div>
          <div>Yesterday - {routine.timeframes.daily.previous}</div>
        </div>
        <div className={`${period} ${period === 'Weekly' ? 'block' : 'hidden'}`}>
          <div>{routine.timeframes.weekly.current}</div>
          <div>Last Week - {routine.timeframes.weekly.previous}</div>
        </div>
        <div className={period === 'Monthly' ? 'block' : 'hidden'}>
          <div>{routine.timeframes.monthly.current}</div>
          <div>Last Month - {routine.timeframes.monthly.previous}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <figure>
          <img src="/images/image-jeremy.png" alt="Jeremy" />
          <figcaption>
            <div>Report for</div>
            <div>Jeremy Robson</div>
          </figcaption>
        </figure>
        <div onClick={ (event) => {
          setPeriod(event.target.innerHTML);
          }}>
          <div>Daily</div>
          <div>Weekly</div>
          <div>Monthly</div>
        </div>
      </div>

      {routineDataComponents}
    </>
  );
}

export default App;
