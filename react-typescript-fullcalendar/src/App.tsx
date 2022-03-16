import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import allLocales from '@fullcalendar/core/locales-all';

function App() {
  return (
    <div>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" locales={allLocales} locale="ja"/>
    </div>
  );
}

export default App;