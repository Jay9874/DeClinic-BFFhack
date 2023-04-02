import React from 'react'
import './Doctor.css'
import Navbar from '../Navbar'
import Upload from '../Upload/Upload';


export default function Doctor({ account, provider, contract }) {
    const pages = ['Help', 'About'];
  return (
    <div>
        <Navbar 
            pages={pages}
            user="Doctor"
            account={account}
        />
        <div className="doctor">
            <Upload 
                account={account}
                provider={provider}
                contract={contract}
            />
        </div>
    </div>
  )
}
