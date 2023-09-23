import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Box, Paper, Stack } from '@mui/material'
import { formatDate } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// import css file
import './calendar.css'

function renderEventContent(eventInfo) {

  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {

  return (
    <li key={event.id} >
      <b className='task'>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i className='task'>{` : ${event.title}`}</i>
    </li>


  )
}


export default function Calendar() {
  const [weekendsVisible, setweekendsVisible] = useState(true)
  const [currentEvents, setcurrentEvents] = useState([])

  const handleWeekendsToggle = () => {
    setweekendsVisible(!weekendsVisible)
  }
  let eventGuid = 0
  function createEventId() {
    return String(eventGuid++)
  }


  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }


  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }


  const handleEvents = (events) => {
    setcurrentEvents(events)
  }








  return (
    <Stack direction={"row"} className='parentCalender'>
      {/* sidebar */}
      <Paper className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <div className='center'>
            <label className='check'>
              <input
                type='checkbox'
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
              ></input>
              toggle weekends
            </label>
            <h2 className='center'>All Events ({currentEvents.length})</h2>
          </div>
        </div>
        <div className='demo-app-sidebar-section'>
          <ul>
            {currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </Paper>







      {/* main app */}
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
        />
      </div>

    </Stack>
  )
}
function createEventId() {
  throw new Error('Function not implemented.')
}

