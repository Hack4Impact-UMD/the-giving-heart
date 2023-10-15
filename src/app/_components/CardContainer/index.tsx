import React from 'react'

import classes from './index.module.scss'

export const CardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.container}> {children} </div>
}
