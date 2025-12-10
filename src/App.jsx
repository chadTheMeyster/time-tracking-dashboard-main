import axios from "axios";
import { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Card } from "./Card";

function App() {
  const [routineData, setRoutineData] = useState([]);
  const [period, setPeriod] = useState("Weekly");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("./data.json");
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
        {/**fix in progress */}
        <div className="h-12 relative md:h-0">
          <img src="./images/icon-work.svg" alt="" className="absolute right-8 -top-2 z-0"/>
        </div>
        <div className="group hover:cursor-pointer">
          <div
            className="bg-neutralNavy-900 p-7 pb-0 text-xl rounded-t-2xl flex justify-between items-center 
                  transition-colors duration-300 ease-in-out group-hover:bg-neutralNavy-500"
          >
            <div>{routine.title}</div>
            <HiDotsHorizontal className="text-3xl text-neutralNavy-200 hover:text-white" />
          </div>

        <Card period={period} routine={routine}/>

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
