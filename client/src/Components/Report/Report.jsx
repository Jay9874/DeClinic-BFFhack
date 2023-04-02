import React from 'react'
import './Report.css'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
          <Box
            sx={{
              mt: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '30px'
            }}
          >
            <div className='report-container'>
              <div className='report-data'>
                <div className='report-data-key'>
                  <span>Age: 25</span>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <span>Height: 170cm</span>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <span>Gender: Female</span>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <span>Weight: 55kg</span>
                </div>
              </div>
              <div className='report-data'>
                <div className='report-data-key'>
                  <span>Blood Group: O+</span>
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
