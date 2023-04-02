import React from 'react'
import './Patient.css'
import Navbar from '../Navbar'
import Report from '../Report/Report'

export default function Patient ({ account }) {
  const pages = ['Help', 'About']

  function retrieveReport () {
    console.log('Retrieve Report')
  }




  return (
    <div>
      <Navbar pages={pages} user='Patient' account={account} />
      <Report 
        account={account}
        retrieveReport={retrieveReport}
      />
    </div>
  )
}
