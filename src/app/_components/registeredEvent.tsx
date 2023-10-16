'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

import styles from './registeredEvent.module.scss'

// required props; some could be optional but not sure which
interface EventData {
  eventName: string
  eventDate: string
  eventTime: string
  eventLocation: string
  volunteerRole: string
  volunteerShifts: string
  isMVP: boolean // used to switch between slider and button
  eventActive: boolean // used to switch between active and inactive states
}

export default function BasicCard(props: EventData) {
  // functions and states are all for the slider
  const [value, setValue] = React.useState<number>(30)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number) // ADD HANDLING FOR NEW SLIDER VALUES HERE
  }

  // changes slider color and bottom messagebased on value
  const getColorForValue = value => {
    if (value == 0) {
      return { sliderColor: 'gray', sliderMessage: 'Succesfully checked out' }
    } else if (value < 100) {
      return { sliderColor: 'yellow', sliderMessage: 'Checking in/out...' }
    } else {
      return { sliderColor: 'orange', sliderMessage: 'Succesfully checked in!' }
    }
  }
  const { sliderColor, sliderMessage } = getColorForValue(value)

  return (
    <Card sx={{ minWidth: 275, maxWidth: '65%', display: 'flex', borderRadius: 2 }}>
      <CardContent sx={{ mb: 5 }}>
        {/* Title */}
        <Typography sx={{ color: 'red', fontSize: 28, mt: 2 }} color="text.secondary" gutterBottom>
          <b>{props.eventName}</b>
        </Typography>

        {/* Main Content */}
        <Typography variant="body2">
          <b>Date:</b> {props.eventDate} - {props.eventTime}
          <br />
          <b>Location:</b> {props.eventLocation}
          <br />
          <b>Volunteer Role:</b> {props.volunteerRole}
          <br />
          <b>Shifts:</b> {props.volunteerShifts}
          <br />
        </Typography>

        {/* Card Actions */}
        <CardContent
          className={styles.cardActions}
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 0 }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 0, mt: 3, color: 'red' }}
          >
            <Typography variant="body1">
              <b>
                If you would like to drop your registration for this event, please click the button
                below.
              </b>
            </Typography>
            <Box sx={{ mt: 1 }}>
              {/* ADD ONCLICK BEHAVIOR HERE */}
              <Button className={styles.inactive} size="small" variant="contained">
                Drop Spot
              </Button>
            </Box>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 0, mt: 3, color: 'red' }}
          >
            <Typography variant="body1">
              {props.isMVP && (
                <b>
                  When the event is active, please check in/out of the event using this slider.
                  Slide the circle to the right to check in, and once you're ready, slide it again
                  to check out.
                </b>
              )}
              {!props.isMVP && (
                <b>
                  When the event is active, please check in/out of the event using these buttons.
                </b>
              )}
            </Typography>

            {props.isMVP && (
              <Box>
                <Typography variant="body1" sx={{ float: 'right', color: 'black' }}>
                  <b>Check in</b>
                </Typography>
                <Slider
                  size="small"
                  value={value}
                  disabled={!props.eventActive}
                  onChange={handleChange}
                  sx={{ color: sliderColor }}
                />
                <Typography variant="body1" sx={{ float: 'right' }}>
                  <b>{props.eventActive && sliderMessage}</b>
                </Typography>
              </Box>
            )}
            {!props.isMVP && (
              <Box sx={{ display: 'flex', mt: 1 }}>
                {/* ADD CHECK IN ONCLICK BEHAVIOR */}
                <Button
                  className={`${props.eventActive ? styles.activecheckin : styles.inactive}`}
                  size="small"
                  variant="contained"
                  sx={{ mr: 2 }}
                >
                  Check in
                </Button>
                {/* ADD CHECK OUT ONCLICK BEHAVIOR */}
                <Button
                  className={`${props.eventActive ? styles.activecheckout : styles.inactive}`}
                  size="small"
                  variant="contained"
                >
                  Check out
                </Button>
              </Box>
            )}
          </Box>
        </CardContent>
      </CardContent>
    </Card>
  )
}
