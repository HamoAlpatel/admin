import React from 'react'
import Geography from './Geography'
import { Box } from '@mui/material'
import Header from '../../Header';

export default function GeographChart() {
  return (
    <>
    <Header title={"Geography"} suptitle={"Simple Geography Chart"}/>
      <Geography isDash={false}/>
    </>
  
  )
}
