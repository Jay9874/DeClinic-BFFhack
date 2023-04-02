import React from 'react'
import './Report.css'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import OutlinedCard from '../Card/Card'

const theme = createTheme()

export default function Report () {
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            My Report
          </Typography>
          <Box sx={{ mt: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
            <div className='report-container'>
              <div className='report-data'>
                <div className='report-data-key'>
                  <h4>age</h4>
                </div>
                <div className='report-data-value'>
                  <h4>25</h4>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <h4>Height</h4>
                </div>
                <div className='report-data-value'>
                  <h4>170cm</h4>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <h4>Gender</h4>
                </div>
                <div className='report-data-value'>
                  <h4>Female</h4>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <h4>Weight</h4>
                </div>
                <div className='report-data-value'>
                  <h4>55kg</h4>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <h4>Blood Group</h4>
                </div>
                <div className='report-data-value'>
                  <h4>O+</h4>
                </div>
              </div>
              <button className='report-button'>Download Report</button>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
