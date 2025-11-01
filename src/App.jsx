import axios from "axios";
import { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

function App() {
  const [routineData, setRoutineData] = useState([]);
  const [period, setPeriod] = useState("Weekly");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/data.json");
      setRoutineData(response.data);
    }

    fetchData();
  }, []);

  const routineDataComponents = routineData.map((routine) => {
    const colorPicker = (activity) => {
      activity = routine.title;
      if (activity === "Work") {
        return "bg-primaryOrangeWork-300";
      } else if (activity === "Play") {
        return "bg-primaryBluePlay-300";
      } else if (activity === "Study") {
        return "bg-primaryPinkStudy-400";
      } else if (activity === "Exercise") {
        return "bg-primaryGreenExercise-400";
      } else if (activity === "Social") {
        return "bg-primaryPurpleSocial-700";
      } else if (activity === "Self Care") {
        return "bg-primaryYellowSelfCare-300";
      }
    };
    return (
      <div
        key={crypto.randomUUID()}
        className={`rounded-t-2xl rounded-b-3xl mb-7 ${colorPicker()}
        md:flex md:flex-col md:justify-end md:mb-0`}
      >
        <div className="h-12 md:h-0"></div>
        <div className="group hover:cursor-pointer">
          <div
            className="bg-neutralNavy-900 p-7 pb-0 text-xl rounded-t-2xl flex justify-between items-center 
                  transition-colors duration-300 ease-in-out group-hover:bg-neutralNavy-500"
          >
            <div>{routine.title}</div>
            <HiDotsHorizontal className="text-3xl text-neutralNavy-200 hover:text-white" />
          </div>

          <div
            className={`bg-neutralNavy-900 p-7 pt-2 flex justify-between items-center rounded-b-2xl transition-colors 
        duration-300 ease-in-out group-hover:bg-neutralNavy-500
        md:flex-col md:items-start
          ${period === "Daily" ? "block" : "hidden"}`}
          >
            <div className="text-4xl font-light
            md:mt-6 md:text-5xl">
              {routine.timeframes.daily.current}hrs
            </div>
            <div className="text-lg text-neutralNavy-200
            md:mt-3">
              Yesterday - {routine.timeframes.daily.previous}hrs
            </div>
          </div>

          <div
            className={`bg-neutralNavy-900 p-7 pt-2 flex justify-between items-center rounded-b-2xl transition-colors 
        duration-300 ease-in-out group-hover:bg-neutralNavy-500
        md:flex-col md:items-start
          ${period} ${period === "Weekly" ? "block" : "hidden"}`}
          >
            <div className="text-4xl font-light
            md:mt-6 md:text-5xl">
              {routine.timeframes.weekly.current}hrs
            </div>
            <div className="text-lg text-neutralNavy-200
            md:mt-3">
              Last Week - {routine.timeframes.weekly.previous}hrs
            </div>
          </div>

          <div
            className={`bg-neutralNavy-900 p-7 pt-2 flex justify-between items-center rounded-b-2xl 
              transition-colors duration-300 ease-in-out group-hover:bg-neutralNavy-500
              md:flex-col md:items-start
          ${period === "Monthly" ? "block" : "hidden"}`}
          >
            <div className="text-4xl font-light
            md:mt-6 md:text-5xl">
              {routine.timeframes.monthly.current}hrs
            </div>
            <div className="text-lg text-neutralNavy-200
            md:mt-3">
              Last Month - {routine.timeframes.monthly.previous}hrs
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="w-96
    md:grid md:grid-cols-4 md:grid-rows-2 md:w-5xl gap-7"
    >
      <div
        className="bg-neutralNavy-900 rounded-b-2xl mb-7
      md:row-span-2 md:h-full"
      >
        <figure className="flex items-center p-7 bg-primaryPurple-600 rounded-2xl
        md:flex-col md:items-start">
          <img
            src="/images/image-jeremy.png"
            alt="Jeremy"
            className="w-21 h-21 border-4 border-white rounded-full"
          />
          <figcaption className="ml-6 md:ml-0 md:mt-10 md:mb-20">
            <div className="text-lg text-neutralNavy-200">Report for</div>
            <div className="text-3xl md:flex md:flex-col">
              <span>Jeremy</span>
              <span className="ml-2">Robson</span>
            </div>
          </figcaption>
        </figure>
        <div
          onClick={(event) => {
            setPeriod(event.target.innerHTML);
            const isOuterDiv =
              event.currentTarget.classList.contains("outerDiv");
            if (isOuterDiv) {
            }
          }}
          className="bg-neutralNavy-900 flex justify-between p-8 text-xl rounded-b-2xl outerDiv
          md:flex-col md:items-start md:justify-between"
        >
          <div
            className={`hover:cursor-pointer hover:text-neutralNavy-200 active:text-white 
            ${period === "Daily" ? "text-white" : "text-neutralNavy-500"}`}
          >
            Daily
          </div>
          <div
            className={`hover:cursor-pointer hover:text-neutralNavy-200 active:text-white
              md:mt-3
            ${period === "Weekly" ? "text-white" : "text-neutralNavy-500"}`}
          >
            Weekly
          </div>
          <div
            className={`hover:cursor-pointer hover:text-neutralNavy-200 active:text-white
              md:mt-3
            ${period === "Monthly" ? "text-white" : "text-neutralNavy-500"}`}
          >
            Monthly
          </div>
        </div>
      </div>

      {routineDataComponents}
    </div>
  );
}

export default App;
