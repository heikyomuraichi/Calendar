import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import allLocales from '@fullcalendar/core/locales-all';

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0")}`
};

function App() {
  return (
    <div>
        <FullCalendar plugins={[dayGridPlugin]} 
          initialView="dayGridMonth"
          locales={allLocales}
          locale="ja"
          events={[
            {title:"event1",date:`${thisMonth()}-01` },
            {title:"event2",date:`${thisMonth()}-02` },
          ]}
        />
    </div>
  );
}

export default App;