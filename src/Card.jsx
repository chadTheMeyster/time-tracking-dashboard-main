export function Card({ period, routine }) {
  const periodTrue = () => {
    if (["Daily", "Weekly", "Monthly"].includes(period)) {
      return "block"
    }else {
      return "hidden"
    }
  }
  return(
    <>
    <div
      className={`bg-neutralNavy-900 p-7 pt-2 flex justify-between items-center rounded-b-2xl transition-colors 
        duration-300 ease-in-out group-hover:bg-neutralNavy-500
        md:flex-col md:items-start
            ${period}${periodTrue()}`}
          
    >
      <div
        className="text-4xl font-light
            md:mt-6 md:text-5xl"
      >
        {`${ period === "Daily" ? routine.timeframes.daily.current
          : period === "Weekly" ? routine.timeframes.weekly.current
          : period === "Monthly" ? routine.timeframes.monthly.current
          : ''
        }`}hrs
      </div>
      <div
        className="text-lg text-neutralNavy-200
            md:mt-3"
      >
        {`${ period === "Daily" ? "Yesterday"
          : period === "Weekly" ? "Last Week"
          : period === "Monthly" ? "Last Month"
          : ''
        }`} - {
          `${ period === "Daily" ? routine.timeframes.daily.previous
          : period === "Weekly" ? routine.timeframes.weekly.previous
          : period === "Monthly" ? routine.timeframes.monthly.previous
          : ''
        }`
        }hrs
      </div>
    </div>
  </>
  ); 
  
}
