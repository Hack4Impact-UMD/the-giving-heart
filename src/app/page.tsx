import React, { Fragment } from 'react'

import { Gutter } from './_components/Gutter'

import classes from './page.module.scss'

export default async function Home() {
  return (
    <Fragment>
      <main className={classes.main}>
        <Gutter>
          <div className={classes.body}>Coming Soon!</div>
        </Gutter>
      </main>
    </Fragment>
  )
}
