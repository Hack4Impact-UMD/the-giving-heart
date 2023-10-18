'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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
  eventActive: boolean // used to switch between active and inactive states
}

export default function BasicCard(props: EventData) {
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
              <b>
                When the event is active, please check in/out of the event using these buttons.
              </b>
            </Typography>
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
          </Box>
        </CardContent>
      </CardContent>
    </Card>
  )
}
