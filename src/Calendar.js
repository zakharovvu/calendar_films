import React from "react"
import {getGridCurrentMount, getCountDay, nextMount, prevMount, mounts} from "./Components/date"
import {Link} from "react-router-dom"

const getCurrentDay = (number, date) => {
let d = new Date()
if (date.getMonth() === d.getMonth() && number === d.getDate()) return 'calendar__square--day'
return ''
}

const Calendar = ({date, handleSetDate, handleSetNumberDate, lang}) => {
  return (
    <div className="calendar">
      <div className="calendar__head">
        <span 
          onClick={() => handleSetDate(getCountDay(date, prevMount)[0])} 
          className="calendar__prev">{'<'}
        </span>
        <span>
          {mounts[lang][date.getMonth()]}
        </span>
        <span  
          onClick={() => handleSetDate(getCountDay(date, nextMount)[0])} 
          className="calendar__next">{'>'}
        </span>
      </div>
      <div className="calendar__content">
        {getGridCurrentMount(date).map((el, i) => 
          el.active 
          ? 
            <Link key={i} to='/films'>
              <div 
                onClick={() => handleSetNumberDate(el)}
                key={i} 
                className={`${el.active 
                  ? "calendar__square" 
                  : "calendar__square calendar__square--noactive"} ${getCurrentDay(el.number, date)}`}
              >
                {el.number}
              </div>
            </Link>
          : 
            <div 
              onClick={() => handleSetNumberDate(el)}
              key={i} 
              className={el.active 
                ? "calendar__square"
                : "calendar__square--noactive" }>
              {el.number}
            </div>
          )}
      </div>
    </div>
  )
}

export default Calendar