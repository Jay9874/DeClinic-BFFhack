import { useState } from 'react'
import axios from 'axios'

import './Upload.css'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

export default function Upload ({ account, provider, contract }) {
  const [file, setFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(false)

  function onFileChange (event) {
    // Update the state
    setImagePreview(true)
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    setFile(url)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (file) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const resFile = await axios({
          method: 'post',
          url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
          data: formData,
          headers: {
            pinata_api_key: `Enter Your Key`,
            pinata_secret_api_key: `Enter Your Secret Key`,
            'Content-Type': 'multipart/form-data'
          }
        })
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`
        //const signer = contract.connect(provider.getSigner());
        const signer = contract.connect(provider.getSigner())
        signer.add(account, ImgHash)
      } catch (e) {
        alert('Unable to upload image to Pinata')
      }
    }
    alert('Successfully Image Uploaded')
    setFile(null)
  }

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
            Upload Report
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Enter age'
                  placeholder='Enter age in years'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Enter gender'
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Enter height'
                  placeholder='Enter height in cm'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Enter weight'
                  placeholder='Enter weight in kg'
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Enter Report category'
                  placeholder='eg : Blood Report, X-Ray, ECG'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Blood group'
                  placeholder='eg : A+, B-, O+'
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <input
                  type='file'
                  name='file'
                  id='file'
                  sx={{ mt: 3, mb: 2 }}
                  required
                  color='primary'
                  placeholder='Upload Report'
                  inputProps={{ 'aria-label': 'description' }}
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                  accept='.pdf,.doc,.docx,.jpg,.png,.jpeg'
                />
                <label htmlFor='file' className='file-label'>
                  Upload Report
                </label>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Container>
      <div className='preview-container'>
        {imagePreview && (
          <div className='image-preview'>
            <iframe
              src={file}
              title='preview'
              className='preview-iframe'
            ></iframe>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}
