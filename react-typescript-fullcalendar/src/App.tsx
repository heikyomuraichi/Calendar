import { useCallback } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import allLocales from '@fullcalendar/core/locales-all';

import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};
function App() {
  const handleDateClick = useCallback((arg : DateClickArg) => {
    alert(arg.dateStr);
  },[]);
  return (
    <div>
        <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} 
          initialView="dayGridMonth"
          locales={allLocales}
          locale="ja"
          events={[
            { title: "event 1", date: `${thisMonth()}-01` },
            { title: "event 2", date: `${thisMonth()}-02` },
          ]}
          dateClick={handleDateClick}
        />
    </div>
  );
}

export default App;