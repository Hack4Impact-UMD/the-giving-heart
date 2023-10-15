import React from 'react'

import { Card } from '../../_components/Card'
import { CardContainer } from '../../_components/CardContainer'
import { Gutter } from '../../_components/Gutter'

import classes from './index.module.scss'

export default async function Dashboard() {
  return (
    <Gutter>
      <h1 className={classes.title}> Welcome, [firstName]! </h1>

      <div className={classes.grayContainer}>Account Type: Volunteer</div>

      <div className={classes.eventContainer}>
        <h2> Events Information </h2>
        <p className={classes.eventInfoText}>You must sign up for an event to volunteer for it.</p>

        {/* placeholder cards */}
        <CardContainer>
          <Card
            className="test"
            showCategories={false}
            hideImagesOnMobile={true}
            title="Event 1"
            relationTo="projects"
            orientation="vertical"
          ></Card>
          <Card
            className="test"
            showCategories={false}
            hideImagesOnMobile={true}
            title="Event 2"
            relationTo="projects"
            orientation="vertical"
          ></Card>
          <Card
            className="test"
            showCategories={false}
            hideImagesOnMobile={true}
            title="Event 3"
            relationTo="projects"
            orientation="vertical"
          ></Card>
          <Card
            className="test"
            showCategories={false}
            hideImagesOnMobile={true}
            title="Event 4"
            relationTo="projects"
            orientation="vertical"
          ></Card>
          <Card
            className="test"
            showCategories={false}
            hideImagesOnMobile={true}
            title="Event 5"
            relationTo="projects"
            orientation="vertical"
          ></Card>
          <Card
            className="test"
            showCategories={false}
            hideImagesOnMobile={true}
            title="Event 6"
            relationTo="projects"
            orientation="vertical"
          ></Card>
        </CardContainer>
      </div>
    </Gutter>
  )
}
