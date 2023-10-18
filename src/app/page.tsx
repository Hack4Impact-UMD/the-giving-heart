import React from 'react'

import RegisteredEvent from './_components/registeredEvent'

const Page: React.FC = () => {
  return (
    <div>
      <RegisteredEvent
        eventName="being the goat"
        eventDate="everyday"
        eventTime="all day"
        eventLocation="the farm"
        volunteerRole="the goat"
        volunteerShifts="24/7 365"
        eventActive={true}
      />
    </div>
  )
}

export default Page
