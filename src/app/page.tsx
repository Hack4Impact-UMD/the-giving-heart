import React from 'react'
import { Box, Typography, Button } from '@mui/material/'
import { Metadata } from 'next'

import { Gutter } from './_components/Gutter'
import { RenderParams } from './_components/RenderParams'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import PageTemplate, { generateMetadata } from './(pages)/[slug]/page'

import classes from './(pages)/home/index.module.scss'

export default async function Home() {
  return (
    <nav className={classes.nav}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{
          width: '100%',
          height: '200px',
          color: 'white',
          backgroundColor: 'darkgrey',
          margin: '0',
        }}
      >
        <img alt="Background Image" src="" />

        <Typography>Short description of org</Typography>
      </Box>

      <Gutter>
        <RenderParams className={classes.params} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              boxShadow: 5,
              width: '60%',
              height: '30%',
              backgroundColor: '#E8E8E8',
              padding: '3%',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>Heading</Typography>
            <Typography>Content</Typography>
            <br />
            <Button sx={{ backgroundColor: 'darkgrey', color: 'white' }}> Get Involved </Button>
          </Box>

          <RenderParams className={classes.params} />

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: '70%',
              height: '30%',
              backgroundColor: 'lightgray',
              padding: '3%',
            }}
          >
            <Typography sx={{ fontSize: 'h4.fontSize' }}>Our Impact So Far</Typography>
            <br />
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-around"
              sx={{
                width: '100%',
              }}
            >
              <Box>
                <Typography textAlign="center" sx={{ fontSize: 'h5.fontSize' }}>
                  10,000
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: 'body2.fontSize' }}>
                  Meals Provided
                </Typography>
              </Box>
              <Box>
                <Typography textAlign="center" sx={{ fontSize: 'h5.fontSize' }}>
                  1000
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: 'body2.fontSize' }}>
                  Volunteers
                </Typography>
              </Box>
              <Box>
                <Typography textAlign="center" sx={{ fontSize: 'h5.fontSize' }}>
                  $100,000
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: 'body2.fontSize' }}>
                  Raised
                </Typography>
              </Box>
            </Box>
          </Box>

          <RenderParams className={classes.params} />

          <Typography textAlign="center" sx={{ fontSize: 'h4.fontSize' }}>
            Gallery
          </Typography>

          <Typography>Replace this with the gallery component</Typography>

        </Box>
      </Gutter>
    </nav>
  )
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the Home Page',
  openGraph: mergeOpenGraph({
    title: 'Home',
    url: '/',
  }),
}

//export default PageTemplate

//export { generateMetadata }
