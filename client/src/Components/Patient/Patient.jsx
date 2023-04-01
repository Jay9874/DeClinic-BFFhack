import React from 'react'
import './Patient.css'
import Navbar from '../Navbar'
import Report from '../Report/Report';

export default function Patient() {
    const pages = ['Help', 'About'];
  return (
    <div>
        <Navbar 
            pages={pages}
            user="Patient"
        />
        <Report />
        
    </div>
  )
}
