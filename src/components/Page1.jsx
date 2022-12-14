import React from 'react'
import { Link } from 'react-router-dom'
import Page1Detail1 from './Page1Detail1'

function Page1() {
  return (
    <>
      <div style={{ fontSize: '28px', textAlign: 'center' }}>Page1</div>
      <Link to='/page1/detail1'><Page1Detail1 /></Link>
      <br />
      <Link to='/page1/detail2'></Link>
    </>
  )
}

export default Page1