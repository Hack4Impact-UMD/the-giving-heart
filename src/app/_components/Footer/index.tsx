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
          {/**error starts here! */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize', width: '20%' }}>
              The Giving Heart
            </Typography>

            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Typography sx={{ fontWeight: 'bold' }}>Contact Us</Typography>
              <Typography>Info@givingheart.com</Typography>
              <Typography>(302)-532-2922</Typography>
            </Box>

            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Typography sx={{ fontWeight: 'bold' }}>Useful Links</Typography>
              <Link
                href="https://github.com/payloadcms/payload/tree/master/templates/website"
                target="_blank"
                rel="noopener noreferrer"
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
              justifyContent="space-between"
              alignItems="center"
              height="50%"
            >
              <Typography sx={{ fontWeight: 'bold' }}>Socials</Typography>
              <Box display="flex" flexDirection="row">
                <img src="" alt="S1" />
                <img src="" alt="S2" />
                <img src="" alt="S3" />
              </Box>
            </Box>
          </Box>

          <Divider
            flexItem
            sx={{ backgroundColor: '#000000', opacity: '0.6', height: '1px', margin: '20px 0' }}
          />

          <Box
            margin="2rem 0 1rem 0"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: 'body2.fontSize' }}>The Giving Heart</Typography>
            <Typography
              sx={{
                fontSize: 'body2.fontSize',
              }}
            >
              Privacy Policy | Terms of Use
            </Typography>
          </Box>
        </nav>
      </Gutter>
    </footer>
  )
}
