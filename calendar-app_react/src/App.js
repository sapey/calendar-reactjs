import './App.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer ({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Entrainement foot",
    allDay: true,
    start: new Date(2022,4,22),
    end: new Date(2022,4,26) 
  },
  {
    title: "Kine",
    start: new Date(2022,4,10),
    end: new Date(2022,4,15) 
  },
  {
    title: "Meeting",
    start: new Date(2022,4,5),
    end: new Date(2022,4,8) 
  }
]

function App() {

  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAlleEvents] = useState(events)

  function handleAddEvent(){
    setAlleEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>Calendrier React</h1> 
      <h2>Ajouter un nouvel évenement</h2> 
      <div>
        <input type="text" placeholder="Ajouter un titre" style={{width: "20%", marginRight: "10px"}}
          value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        <DatePicker placeholderText="Date de départ"
          selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
        />
        <DatePicker placeholderText="Date de fin" 
          selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
        />
        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Ajouter</button>
      </div>
      <Calendar 
        localizer={localizer} 
        events={allEvents}
        startAccessor="start" 
        endAccessor="end" 
        style={{height: 500, margin: "50px"}} 
        />
    </div>
  );
}

export default App;
