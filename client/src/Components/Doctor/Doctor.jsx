import React from 'react'
import './Doctor.css'
import Navbar from '../Navbar'
import Upload from '../Upload/Upload';


export default function Doctor() {
    const pages = ['Help', 'About'];
  return (
    <div>
        <Navbar 
            pages={pages}
            user="Doctor"
        />
        <div className="doctor">
            <Upload />
        </div>
    </div>
  )
}
