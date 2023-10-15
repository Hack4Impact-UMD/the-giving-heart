import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material/'
import { Metadata } from 'next'

import { Gutter } from './_components/Gutter'
import { RenderParams } from './_components/RenderParams'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import PageTemplate, { generateMetadata } from './(pages)/[slug]/page'

import classes from './(pages)/home/index.module.scss'
const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
]
const galleryContainerStyle = {
  display: 'flex',
  flexWrap: 'nowrap',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
}

const galleryItemStyle = {
  margin: '0.5rem',
  flex: '0 0 30%',
  padding: '10px',
  boxSizing: 'border-box',
  height: '300px',
  backgroundColor: 'lightGray',
}

const imageStyle = {
  height: 'auto',
  width: '100%',
}

export default async function Home() {
  return (
    <>
      <div style={{ background: 'grey', padding: '50px' }}>
        <Container sx={{ height: '300px' }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <h3> Background Image </h3>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">The Giving Heart</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sed euismod nisi porta lorem mollis
                aliquam. Adipiscing bibendum est ultricies integer quis.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ background: 'white', paddingTop: '30px', paddingBottom: '30px' }}>
        <Container>
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
                width: '70%',
                height: '200px',
                marginTop: '5%',
                marginBottom: '5%',
                backgroundColor: '#f5f5f5',
                padding: '3%',
              }}
            >
              <Typography variant="h5" color="black" fontWeight="fontWeightMedium">
                {' '}
                Lorem Ipsum Dolor Sit Amet{' '}
              </Typography>
              <Typography color="black" textAlign="center" fontSize="0.9rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sed euismod nisi porta lorem mollis
                aliquam.{' '}
              </Typography>
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
                width: '90%',
                height: '30%',
                backgroundColor: 'lightgray',
                padding: '3%',
              }}
            >
              <Typography sx={{ color: 'black', fontSize: 'h5.fontSize' }}>
                Our Impact So Far
              </Typography>
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
                  <Typography textAlign="center" sx={{ color: 'black', fontSize: 'h5.fontSize' }}>
                    10,000
                  </Typography>
                  <Typography
                    textAlign="center"
                    sx={{ color: 'black', fontSize: 'body2.fontSize' }}
                  >
                    Meals Provided
                  </Typography>
                </Box>
                <Box>
                  <Typography textAlign="center" sx={{ color: 'black', fontSize: 'h5.fontSize' }}>
                    1000
                  </Typography>
                  <Typography
                    textAlign="center"
                    sx={{ color: 'black', fontSize: 'body2.fontSize' }}
                  >
                    Volunteers
                  </Typography>
                </Box>
                <Box>
                  <Typography textAlign="center" sx={{ color: 'black', fontSize: 'h5.fontSize' }}>
                    $100,000
                  </Typography>
                  <Typography
                    textAlign="center"
                    sx={{ color: 'black', fontSize: 'body2.fontSize' }}
                  >
                    Raised
                  </Typography>
                </Box>
              </Box>
            </Box>

            <RenderParams className={classes.params} />
          </Box>
          <div style={galleryContainerStyle}>
            {images.map((imageUrl, index) => (
              <Card key={index} style={galleryItemStyle}>
                <CardMedia
                  component="img"
                  height="300"
                  image={imageUrl}
                  style={imageStyle}
                />
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </>
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
