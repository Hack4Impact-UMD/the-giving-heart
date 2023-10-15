import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountPage from './CreateAccountPage'

import classes from './index.module.scss'

export default async function CreateAccount() {
  return (
    <Gutter className={classes.createAccount}>
      <RenderParams className={classes.params} />
      <CreateAccountPage />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Create Account',
    url: '/create-account',
  }),
}
