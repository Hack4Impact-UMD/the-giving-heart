import React from 'react';
import Link from 'next/link'
import classes from './index.module.scss';

export const LeftNavBar: React.FC = () => {
  return (
    <div className={classes.navbar}>
      <Link legacyBehavior href="/settings">
        <a className={classes.link}> Settings </a>
      </Link>

      <Link legacyBehavior href="/event-management">
        <a className={classes.link}> Event Management </a>
      </Link>
    </div>
  );
};