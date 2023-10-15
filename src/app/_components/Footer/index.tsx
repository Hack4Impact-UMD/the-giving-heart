import React from 'react'
import { Box, Divider, Typography } from '@mui/material/'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer id={classes.homefooter} className={classes.footer}>
      <Gutter className={classes.wrap}>
        <nav className={classes.nav}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexAlign="center"
            height="100px"
            width="100%"
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize', width: '20%' }}>
              The Giving Heart
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: 'bold' }}>Contact Us</Typography>
              <Typography>Info@givingheart.com</Typography>
              <Typography>(302)-532-2922</Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: 'bold' }}>Useful Links</Typography>
              <Link
                href="https://github.com/payloadcms/payload/tree/master/templates/website"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ align: 'center' }}
              >
                Donate
              </Link>
              <Link
                href="https://github.com/payloadcms/payload/tree/master/templates/website"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volunteer
              </Link>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: 'bold' }}>Socials</Typography>
              <Box display="flex" flexDirection="row">
                <img alt="S1" src="" />
                <img alt="S2" src="" />
                <img alt="S3" src="" />
              </Box>
            </Box>
          </Box>

          <br />
          <Divider flexItem sx={{ color: '#606060' }} />

          <Box width='100%' display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: 'body2.fontSize' }}>The Giving Heart</Typography>
            <Typography sx={{ fontSize: 'body2.fontSize' }}>
              <Link href="" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
              |
              <Link href="" target="_blank" rel="noopener noreferrer">
                Terms of Use
              </Link>
            </Typography>
          </Box>
        </nav>
      </Gutter>
    </footer>
  )
}
