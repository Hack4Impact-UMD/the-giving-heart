import React from 'react'
import { BrowserRouter } from "react-router-dom";

import { Card } from '../../_components/Card'
import { Gutter } from '../../_components/Gutter'
import { CardContainer } from '../../_components/CardContainer'


import classes from './index.module.scss'
import { LeftNavBar } from '../../_components/LeftNavBar';


export default async function Dashboard() {
  return (
    <div className={classes.mainContainer}>
        <LeftNavBar />
        
        {/* <Gutter> */}
        <div className={classes.container}>
            <h1> Welcome, [firstName]! </h1>
            
            <div className={classes.grayContainer}>
                Account Type: Volunteer
            </div>

            <div className={classes.eventContainer}>
                <h2> Events Information </h2>
                <p className={classes.eventInfoText}> You must sign up for an event to volunteer for it. </p>
                
                <CardContainer>
                    <Card title="Event 1"> </Card>
                    <Card title="Event 2"> </Card>
                    <Card title="Event 3"> </Card>
                    <Card title="Event 4"> </Card>
                    <Card title="Event 5"> </Card>
                    <Card title="Event 6"> </Card>
                </CardContainer>
            </div>
        {/* </Gutter> */}
        </div>
    </div>
  )
}
